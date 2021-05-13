// import mongoose from "mongoose";
// import User from "../models/userModel.js";
// import dotenv from "dotenv";

import { db } from "../connection/firebase.js"

export const displayError = async (req, res) => {
  res.status(200).json("Usage: url/groceries/<offset>");
  
};

export const getGroceries = async (req, res) => {
  try {
    console.log(req.body)
    let firebaseResult = await db.collection('users')
    console.log(Object.keys(firebaseResult))
    // console.log(firebaseResult.firestore)
    /*

    const { id } = req.body;
    console.log(req.body)
    const { offset } = req.params;
    const fetchLimit = 10;

    const result = await User.findById(id)
    const { userGroceries } = result
      // .limit(fetchLimit)
      // .skip(parseInt(offset));

    res.status(200).json(userGroceries);*/

  } catch (error) {
    console.log("getGroceries controller error: " + error.message)
    res.status(404).json(error.message);
  }
};

export const getGroceryCategories = async (req, res) => {
  try {
    const { key } = req.params;

    if (key === "demo123") {
      const groceryItems = await DemoGroceryItem.aggregate([
        {
          $group: { _id: "$category" },
        },
      ]);

      res.status(200).json(groceryItems);
      return;
    } else if (key !== process.env.USER_KEY) {
      console.log(`${key} !== ${process.env.USER_KEY}`);
      res.status(404).json("invalid authentication key");
      return;
    }

    const groceryItems = await GroceryItem.aggregate([
      {
        $group: { _id: "$category" },
      },
    ]);

    res.status(200).json(groceryItems);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getGroceriesCount = async (req, res) => {
  try {
    const { id } = req.body;

    const { data } = await User.findById(id);
    res.status(200).json(data.userGroceries.length);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createGrocery = async (req, res) => {
  try {
    const { key } = req.params;
    const groceryItem = req.body;

    if (key === "demo123") {
      const newGrocery = new DemoGroceryItem(groceryItem);

      await newGrocery.save();
      return;
    }

    if (key !== process.env.USER_KEY) {
      res.status(404).json("invalid authentication key");
      return;
    }

    const newGrocery = new GroceryItem(groceryItem);

    await newGrocery.save();

    res.status(201).json(newGrocery);
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
