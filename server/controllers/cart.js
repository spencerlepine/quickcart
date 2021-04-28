import mongoose from "mongoose"
import CartItem from "../models/cartItem.js"
import DemoCartItem from "../models/demoCartItem.js"
import dotenv from "dotenv"

export const fetchCart = async (req, res) => {
  try {
    const { key } = req.params

    if (key === "demo123") {
      const cartItems = await DemoCartItem.find()

      res.status(200).json(cartItems)
      return
    } else if (key !== process.env.USER_KEY) {
      res.status(404).json("invalid authentication key")
      return
    }

    const cartItems = await CartItem.find()

    res.status(200).json(cartItems)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const fetchCartItem = async (req, res) => {
  try {
    const { key, id } = req.params

    if (key === "demo123") {
      const thisCartItem = await DemoCartItem.findById(id)

      res.status(200).json(thisCartItem)
      return
    } else if (key !== process.env.USER_KEY) {
      res.status(404).json("invalid authentication key")
      return
    }

    const thisCartItem = await CartItem.findById(id)

    res.status(200).json(thisCartItem)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const addToCart = async (req, res) => {
  const { key, id } = req.params

  const cartItem = req.body
  const withQuantity = {
    ...cartItem,
    quantity: 1,
  }

  if (key === "demo123") {
    const newCartItem = new DemoCartItem(withQuantity)

    try {
      await newCartItem.save()
  
      res.status(201).json(newCartItem)
    } catch (error) {
      res.status(409).json(error.message)
    }
    return
  } else 
  if (key !== process.env.USER_KEY) {
    res.status(404).json("invalid authentication key")
    return
  }

  const newCartItem = new CartItem(withQuantity)

  try {
    await newCartItem.save()

    res.status(201).json(newCartItem)
  } catch (error) {
    res.status(409).json(error.message)
  }
}

export const updateCartItem = async (req, res) => {
  const { id: _id, key } = req.params

  const cartItem = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id")
  }

  if (key === "demo123") {
    const updatedCartItem = await DemoCartItem.findByIdAndUpdate(
      _id,
      { ...cartItem, _id },
      { new: true }
    )
    res.json(updatedCartItem)
    return
  } else if (key !== process.env.USER_KEY) {
    res.status(404).json("invalid authentication key")
    return
  }

  const updatedCartItem = await CartItem.findByIdAndUpdate(
    _id,
    { ...cartItem, _id },
    { new: true }
  )
  res.json(updatedCartItem)
}

export const removeFromCart = async (req, res) => {
  const { id: _id, key } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id")
  }

   if (key === "demo123") {
    await DemoCartItem.findByIdAndDelete(_id)

    res.json("Item deleted successfully")
    return
  } else if (key !== process.env.USER_KEY) {
    res.status(404).json("invalid authentication key")
    return
  }

  await CartItem.findByIdAndDelete(_id)

  res.json("Item deleted successfully")
}
