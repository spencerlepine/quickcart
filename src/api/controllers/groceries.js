import { auth, db, useFirebase } from "../firebase.js"

export const fetchGroceries = async (lastGroceryName) => {
  try {
    const { uid: userId } = auth.currentUser
    const fetchLimit = 10;

    let { docs: groceryBatch } = await db.collection('users')
      .doc(userId)
      .collection("userGroceries")
      .orderBy("name")
      .startAt(lastGroceryName)
      .limit(fetchLimit)
      .get()

    let docsData = groceryBatch.map( firebaseDoc => firebaseDoc.data() )

    return docsData
  } catch (error) {
    console.log(error.message)
    return []
  }
};

export const fetchGroceryCount = async () => {
  try {
    const { uid: userId } = auth.currentUser

    const countResult = await db.collection('users')
      .doc(userId)
      .collection("groceryCount")
      .doc("totalCount")
      .get()

    const data = countResult.data()
    const totalCount = data ? data.totalCount : 0

    return totalCount
  } catch (error) {
    console.log(error.message)
    return 0
  }
}

export const createGrocery = async (newGroceryItem) => {
  try {
    const { uid: userId } = auth.currentUser

    const userDocRef = await db.collection('users').doc(userId)

    const newGroceryId = newGroceryItem["name"]

    const itemDocRef = await userDocRef
      .collection('userGroceries')
      .doc(newGroceryId)

    let exisitingItemDoc = false
    await itemDocRef.get().then(doc => {
      if (doc.exists) {
        exisitingItemDoc = true
      }
    })

    if (!exisitingItemDoc) {
      const increment = useFirebase.FieldValue.increment(1);
      await userDocRef
        .collection("groceryCount")
        .doc("totalCount")
        .update({ totalCount: increment })
    }

    await itemDocRef.set({
        name: newGroceryItem.name,
        purchase_price: newGroceryItem.purchase_price,
        purchase_size: newGroceryItem.purchase_size,
        serving_cost: newGroceryItem.serving_cost,
        category: newGroceryItem.category,
        last_purchased: newGroceryItem.last_purchased,
        priority: newGroceryItem.priority,
        image: newGroceryItem.image,
      })

    return newGroceryItem
  } catch (error) {
    console.log(error.message)
    return {}
  }
};

export const updateGrocery = async (updatedGroceryItem) => {
  try {
    const { uid: userId } = auth.currentUser
    const updatedGroceryId = updatedGroceryItem["name"]

    await db.collection('users')
      .doc(userId)
      .collection('userGroceries')
      .doc(updatedGroceryId)
      .set(updatedGroceryItem)

    return updatedGroceryItem
  } catch (error) {
    console.log(error.message)
    return {}
  }
};

export const deleteGrocery = async (groceryId) => {
  try {
    const { uid: userId } = auth.currentUser

    await db.collection('users')
      .doc(userId)
      .collection('userGroceries')
      .doc(groceryId)
      .delete()

    const decrement = useFirebase.FieldValue.increment(-1);
    await db.collection('users')
      .doc(userId)
      .collection("groceryCount")
      .doc("totalCount")
      .update({ totalCount: decrement })
  } catch (error) {
    console.log(error.message)
  }
};