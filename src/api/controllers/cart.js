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

    const itemToAddId = itemToAdd["_id"]

    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(itemToAddId)

    const result = await cartItemRef.get()
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
          const newCartItem = { ...itemToAdd, quantity: 1 }
          await cartItemRef.set(newCartItem)
          return { ...newCartItem, quantity: 1 }
        }
      });
    return result
  } catch (error) {
    console.log(error.message)
  }
}

export const updateCartItem = async (updatedCartItem) => {
  try {
    const { uid: userId } = auth.currentUser
    const updatedItemId = updatedCartItem["_id"]

    let cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(updatedItemId)

    await cartItemRef.set(updatedCartItem)

    return updatedCartItem
  } catch (error) {
    console.log(error.message)
  }
}

export const removeFromCart = async (groceryId) => {
  try {
    const { uid: userId } = auth.currentUser

    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(groceryId)

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
      _id: itemToLog._id,
      name: itemToLog.name,
      category: itemToLog.category,
      purchase_price: itemToLog.purchase_price,
      quantity: itemToLog.quantity
    }

    // Save the item
    await db.collection('users')
      .doc(userId)
      .collection('userCartLogs')
      .doc(formattedDate)
      .collection('cartItems')
      .doc(itemToLog._id)
      .set(itemLogObj)
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchCartLogs = async () => {
  try {
    const { uid: userId } = auth.currentUser

    // Get all the cart logs for the user
    let { docs: receiptDocs } = await
      db.collection('users')
        .doc(userId)
        .collection('userCartLogs')
        .get()

    const cartLogData = []

    // Get the cartItems for each receipt
    for (let i = 0; i < receiptDocs.length; i++) {
      const docSnapshot = receiptDocs[i];

      const { docs: cartItemsCol } = await docSnapshot.ref.collection('cartItems').get()

      const dateReceipt = [docSnapshot["id"]]
      for (let d = 0; d < cartItemsCol.length; d++) {
        const doc = cartItemsCol[d];
        const data = await doc.data()
        dateReceipt.push(data)
      }

      await cartLogData.push(dateReceipt)
    }

    // Fill in the ID if this does not have one
    return cartLogData
  } catch (error) {
    console.log(error.message)
  }
}