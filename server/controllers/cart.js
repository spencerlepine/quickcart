import { db } from "../connection/firebase.js"

export const fetchCart = async (req, res) => {
  try {
    const { userId } = req.params

    let { docs: cartItems } = await db.collection('users')
      .doc(userId)
      .collection("userCart")
      .get()

    let cartData = cartItems.map(firebaseDoc => firebaseDoc.data())

    res.status(200).json(cartData);
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const addToCart = async (req, res) => {
  try {
    const { userId } = req.params
    const cartItem = req.body
    
    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(cartItem.name)

    await cartItemRef.get()
      .then(async (docSnapshot) => {
        if (docSnapshot.exists) {
          const itemData = await docSnapshot.data()
          const existingItem = { 
            ...itemData,
            quantity: itemData.quantity + 1
          }
          await cartItemRef.set(existingItem)
          res.status(200).json(existingItem);
          return
        } else {
          const newCartItem = {...cartItem, quantity: 1 }
          await cartItemRef.set(newCartItem)
          res.status(200).json({ ...cartItem, quantity: 1 });
          return
        }
    });
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const updateCartItem = async (req, res) => {
  try {
    const { userId } = req.params
    const updatedCartItem = req.body

    let cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(updatedCartItem.name)

    await cartItemRef.set(updatedCartItem)
  
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const { userId, groceryName } = req.params

    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(groceryName)

    if (cartItemRef) {
      cartItemRef.delete()
      res.status(200).json(groceryName);
    }
  
    res.status(409).json();
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const logCartItem = async (req, res) => {
  try {
    const { userId } = req.params
    const itemToLog = req.body

    // Get this weeks Sunday
    function getSunday(d) {
      d = new Date(d);
      var day = d.getDay(),
          diff = d.getDate() - day; // adjust when day is sunday
    
      return new Date(d.setDate(diff));
    }
    
    function formatDate(d) {
      let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      return `${ye}-${mo}-${da}`
    }
    
    // Format to YEAR-MM-DD
    const today = new Date()
    const thisWeekSunday = getSunday(today); // Mon Nov 08 2010
    const formattedDate = formatDate(thisWeekSunday)
    
    // Get the user cartLogs collection
    try {
      const itemLogObj = {
        name: itemToLog.name, 
        category: itemToLog.category,
        purchase_price: itemToLog.purchase_price,
        quantity: itemToLog.quantity
      }

      const logsCollectionRef = await db.collection('users')
        .doc(userId)
        .collection('userCartLogs')
        .doc(formattedDate)
        .collection('cartItems')
        .doc(itemToLog.name)
          .set(itemLogObj)
        } catch (err) {
          console.log(err)
          res.status(404).json(err);
        }
  
    res.status(200).json();
  } catch (error) {
    res.status(404).json(error.message)
  }
}