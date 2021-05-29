import { auth, db } from "../firebase.js"

export const fetchCartItems = async (req, res) => {
  try {
    const { uid: userId } = auth.currentUser

    let { docs: cartItems } = await db.collection('users')
      .doc(userId)
      .collection("userCart")
      .get()

    let cartData = cartItems.map(firebaseDoc => firebaseDoc.data())

    return cartData
  } catch (error) {
    console.log(error.message)
  }
}

export const addToCart = async (itemToAdd) => {
  try {
    const { uid: userId } = auth.currentUser
    
    const itemToAddId = itemToAdd["name"]

    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(itemToAddId)

    await cartItemRef.get()
      .then(async (docSnapshot) => {
        if (docSnapshot.exists) {
          const itemData = await docSnapshot.data()
          const existingItem = { 
            ...itemData,
            quantity: itemData.quantity + 1
          }
          await cartItemRef.set(existingItem)
          return existingItem
        } else {
          const newCartItem = {...itemToAdd, quantity: 1 }
          await cartItemRef.set(newCartItem)
          return { ...newCartItem, quantity: 1 }
        }
    });
  } catch (error) {
    console.log(error.message)
  }
}

export const updateCartItem = async (updatedCartItem) => {
  try {
    const { uid: userId } = auth.currentUser

    let cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(updatedCartItem.name)

    await cartItemRef.set(updatedCartItem)
  
    return updatedCartItem
  } catch (error) {
    console.log(error.message)
  }
}

export const removeFromCart = async (groceryName) => {
  try {
    const { uid: userId } = auth.currentUser

    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(groceryName)

    if (cartItemRef) {
      cartItemRef.delete()
    }
    } catch (error) {
    console.log(error.message)
  }
}

export const logCartItem = async (itemToLog) => {
  try {
    const { uid: userId } = auth.currentUser

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
  } catch (error) {
    console.log(error.message)
  }
}