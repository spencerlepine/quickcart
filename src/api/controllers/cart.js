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
    const logsCollectionRef = await db.collection('users')
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

    // Save the item
    const userDoc = await db.collection('users').doc(userId)
    const cartLogCollection = await userDoc.collection("userCartLogs")
    // const { docs: dateLogs } = await cartLogCollection.get()

    const { docs: dateLogs } = await db.collection('users')
      .doc(userId)
      .collection("userCartLogs")
      .limit(10)
      .get()

    const cartLogData = []
    for (let i = 0; i < dateLogs.length; i++) {
      const dateData = []
      const { docs: dateItems } = await cartLogCollection.doc(dateLogs[i].ref.id)
        .collection('cartItems')
        .get()

      await dateItems.map(async (firebaseDoc) => {
        const data = await firebaseDoc.data()
        // if (!data._id) {
        //   // Find the id of this product with similar name
        //   console.log("need to find an ID")
        //   const ref =
        //   var wantedOrder = await userDoc.collection("userGroceries").orderByChild('name').equalTo(data.name).on("value", function (snapshot) {
        //     snapshot.forEach(function (child) {
        //       console.log(child.val()) // NOW THE CHILDREN PRINT IN ORDER
        //     });
        //   });
        // } else {
        //   return data._id
        // }
        dateData.push(data)
      })
      cartLogData.push(dateData)
    }

    // Fill in the ID if this does not have one
    return cartLogData
  } catch (error) {
    console.log(error.message)
  }
}