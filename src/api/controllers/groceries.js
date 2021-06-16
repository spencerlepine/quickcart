import { auth, db, useFirebase } from "../firebase.js"
import formatGroceryObj from "../../modules/formatGroceryObj"

export const fetchGroceries = async (lastGroceryId) => {
  try {
    const { uid: userId } = auth.currentUser
    const fetchLimit = 10;

    let { docs: groceryBatch } = await db.collection('users')
      .doc(userId)
      .collection("userGroceries")
      .orderBy("_id")
      .startAfter(lastGroceryId)
      .limit(fetchLimit)
      .get()

    let docsData = groceryBatch.map(firebaseDoc => firebaseDoc.data())

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

async function docExists(collectionRef, docId) {
  const id = docId.toString()
  const itemDocRef = await collectionRef.doc(id)

  let exisitingItemDoc = false
  await itemDocRef.get().then(doc => {
    if (doc.exists) {
      exisitingItemDoc = true
    }
  })
  return exisitingItemDoc
}

export const createGrocery = async (newGroceryItem) => {
  try {
    const { uid: userId } = auth.currentUser

    const userDocRef = await db.collection('users').doc(userId)
    let newGroceryId = newGroceryItem["_id"] || newGroceryItem["name"]
    const groceryCollectionRef = await userDocRef
      .collection('userGroceries')

    let exisitingItemDoc = docExists(groceryCollectionRef, newGroceryId)

    while (exisitingItemDoc) {
      const currentId = parseInt(newGroceryId)
      const randomId = Math.floor(Math.random() * 10000000000000000) - currentId;
      newGroceryId = randomId.toString()
      exisitingItemDoc = await docExists(groceryCollectionRef, randomId)
    }

    let itemDocRef = groceryCollectionRef.doc(newGroceryId)

    const increment = useFirebase.FieldValue.increment(1);
    await userDocRef
      .collection("groceryCount")
      .doc("totalCount")
      .update({ totalCount: increment })

    const withId = formatGroceryObj({ ...newGroceryItem, _id: newGroceryId })
    await itemDocRef.set(withId)
    return withId
  } catch (error) {
    console.log(error.message)
    return {}
  }
};

export const updateGrocery = async (updatedGroceryItem) => {
  try {
    const { uid: userId } = auth.currentUser
    const updatedGroceryId = updatedGroceryItem["_id"]

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