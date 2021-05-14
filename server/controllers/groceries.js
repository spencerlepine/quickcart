import { db } from "../connection/firebase.js"

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
    // const { id: userId, offset } = req.params

    // let { docs: groceryCategories } = await db.collection('users')
    //   .doc(userId)
    //   .collection("userGroceries")
    //   .orderBy("purchase_price")
    //   .startAt(offset)
    //   .limit(fetchLimit)
    //   .get()

    let groceryCategories = ['grains', 'bread', 'breakfast', 'dairy', 'fruits', 'vegetables', 'bread', 'pantry', 'snacks', 'meat']
    res.status(200).json(groceryCategories);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getGroceriesCount = async (req, res) => {
  try {
    const { userId } = req.params

    const { docs } = await db.collection('users')
      .doc(userId)
      .collection("userGroceries")
      .get()

    const groceryCount = docs.length

    res.status(200).json(groceryCount);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createGrocery = async (req, res) => {
  try {
    const { userId } = req.params
    const groceryObj  = req.body

    await db.collection('users').doc(userId)
      .collection('userGroceries')
      .doc(groceryObj.name)
      .set({
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

    res.status(200).json(groceryName);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

// export const deleteAllGroceries = async (req, res) => {
//   const { key } = req.params;

//   if (key !== process.env.USER_KEY) {
//     res.status(404).json("invalid authentication key");
//     return;
//   }

//   await GroceryItem.deleteMany();

//   res.json("Database cleared successfully");
// };
