import { db } from "../connection/firebase.js"

export const displayError = async (req, res) => {
  res.status(200).json("Usage: url/groceries/<offset>");
};

export const getGroceries = async (req, res) => {
  try {
    const { id: userId, offset } = req.params
    const fetchLimit = 10;

    let { docs: groceryBatch } = await db.collection('users')
      .doc(userId)
      .collection("userGroceries")
      .orderBy("name")
      .startAt(offset)
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
    // const { id: userId, offset } = req.params

    // let { docs: groceryCategories } = await db.collection('users')
    //   .doc(userId)
    //   .collection("userGroceries")
    //   .orderBy("purchase_price")
    //   .startAt(offset)
    //   .limit(fetchLimit)
    //   .get()

    let groceryCategories = ['ham', 'cheese', 'crackers', 'under', 'construction']
    res.status(200).json(groceryCategories);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getGroceriesCount = async (req, res) => {
  try {
    const { id: userId } = req.params

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
    const { id: userId } = req.params
    const groceryObj = req.body

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
          // image: groceryObj.image,
        })

    res.status(200).json(groceryObj);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const updateGrocery = async (req, res) => {
  const { key, id: _id } = req.params;
  const groceryItem = req.body;

  if (key === "demo123") {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with that id");
    }

    const updateGroceryItem = await DemoGroceryItem.findByIdAndUpdate(
      _id,
      { ...groceryItem, _id },
      { new: true }
    );
    res.json(updateGroceryItem);
  }

  if (key !== process.env.USER_KEY) {
    res.status(404).json("invalid authentication key");
    return;
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updateGroceryItem = await GroceryItem.findByIdAndUpdate(
    _id,
    { ...groceryItem, _id },
    { new: true }
  );
  res.json(updateGroceryItem);
};

export const deleteGrocery = async (req, res) => {
  const { key, id: _id } = req.params;

  if (key === "demo123") {
    await DemoGroceryItem.findByIdAndDelete(_id);

    res.json("Item deleted successfully");
  }

  if (key !== process.env.USER_KEY) {
    res.status(404).json("invalid authentication key");
    return;
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  await GroceryItem.findByIdAndDelete(_id);

  res.json("Item deleted successfully");
};

export const deleteAllGroceries = async (req, res) => {
  const { key } = req.params;

  if (key !== process.env.USER_KEY) {
    res.status(404).json("invalid authentication key");
    return;
  }

  await GroceryItem.deleteMany();

  res.json("Database cleared successfully");
};
