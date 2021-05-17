import { db, useFirebase } from "../connection/firebase.js"

export const getGroceries = async (req, res) => {
  try {
    const { userId, lastGrocery } = req.params
    const fetchLimit = 10;

    let { docs: groceryBatch } = await db.collection('users')
      .doc(userId)
      .collection("userGroceries")
      .orderBy("name")
      .startAt(lastGrocery)
      .limit(fetchLimit)
      .get()

    let docsData = groceryBatch.map( firebaseDoc => firebaseDoc.data() )

    res.status(200).json(docsData );
  } catch (error) {
    console.log(error.message)
    res.status(404).json(error.message);
  }
};

export const getGroceryCategories = async (req, res) => {
  try {
    const { userId } = req.params

    let groceryCategories = ['grains', 'bread', 'breakfast', 'dairy', 'fruits', 'vegetables', 'pantry', 'snacks', 'meat', 'beverages', 'condements']
    res.status(200).json(groceryCategories);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getGroceryItem = async (req, res) => {
  try {
    const { userId, groceryName } = req.params

    const thisGrocery = await db.collection('users')
      .doc(userId)
      .collection('userGroceries')
      .doc(groceryName)
      .get()

    const groceryData = thisGrocery.data()
    res.status(200).json(groceryData);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const getGroceriesCount = async (req, res) => {
  try {
    const { userId } = req.params

    const countResult = await db.collection('users')
      .doc(userId)
      .collection("groceryCount")
      .doc("totalCount")
      .get()

    const data = countResult.data()
    const totalCount = data ? data.totalCount : 0
    console.log("totalCount: " + totalCount)

    res.status(200).json(totalCount);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createGrocery = async (req, res) => {
  try {
    const { userId } = req.params
    const groceryObj  = req.body

    const userDocRef = await db.collection('users').doc(userId)
    
    const itemDocRef = await userDocRef
      .collection('userGroceries')
      .doc(groceryObj.name)

    const getAttempt = itemDocRef.get()
    if (getAttempt.length === 0) {
      const increment = useFirebase.FieldValue.increment(1);
      await userDocRef
        .collection("groceryCount")
        .doc("totalCount")
        .update({ totalCount: increment })
    }

    await itemDocRef.set({
        name: groceryObj.name,
        purchase_price: groceryObj.purchase_price,
        purchase_size: groceryObj.purchase_size,
        serving_cost: groceryObj.serving_cost,
        category: groceryObj.category,
        last_purchased: groceryObj.last_purchased,
        priority: groceryObj.priority,
        image: groceryObj.image,
      })

    res.status(200).json(groceryObj);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const updateGrocery = async (req, res) => {
  try {
    const { userId } = req.params
    const updatedGrocery = req.body

    await db.collection('users')
      .doc(userId)
      .collection('userGroceries')
      .doc(updatedGrocery.name)
      .set({
        ...updatedGrocery
      })

    res.status(200).json(updatedGrocery);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const deleteGrocery = async (req, res) => {
  try {
    const { userId, groceryName } = req.params

    await db.collection('users')
      .doc(userId)
      .collection('userGroceries')
      .doc(groceryName)
      .delete()

    const decrement = useFirebase.FieldValue.increment(-1);
    await db.collection('users')
      .doc(userId)
      .collection("groceryCount")
      .doc("totalCount")
      .update({ totalCount: decrement })

    res.status(200).json(groceryName);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
