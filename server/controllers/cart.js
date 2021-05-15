import { db } from "../connection/firebase.js"

export const fetchCart = async (req, res) => {
  try {
    const { userId } = req.params

    let { docs: cartItems } = await db.collection('users')
      .doc(userId)
      .collection("userCart")
      .get()

    let cartData = cartItems.map(firebaseDoc => firebaseDoc.data())

    res.status(200).json(cartData);
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const fetchCartItem = async (req, res) => {
  try {
    const { userId } = req.params
    const cartItemName = req.body

    let cartItemData = await db.collection('users')
      .doc(userId)
      .collection("userCart")
      .doc(cartItemName)

    res.status(200).json(cartItemData.data());
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const addToCart = async (req, res) => {
  try {
    const { userId } = req.params
    const cartItem = req.body
    
    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(cartItem.name)


    if (cartItemRef) {
       await cartItemRef.set({
        ...cartItem,
        quantity: 1
      })
      res.status(200).json({ ...cartItem, quantity: 1 });
    }
  
    res.status(409).json();
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const updateCartItem = async (req, res) => {
  try {
    const { userId } = req.params
    const updatedCartItem = req.body

    let cartItemRef = await db.collection('users').doc(userId)
      .collection('userCart')
      .doc(updatedCartItem.name)

    await cartItemRef.update({
      quantity: updatedCartItem.quantity
    })
  
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const { userId, groceryName } = req.params

    const cartItemRef = await db.collection('users')
      .doc(userId)
      .collection('userCart')
      .doc(groceryName)

    if (cartItemRef) {
      cartItemRef.delete()
      res.status(200).json(groceryName);
    }
  
    res.status(409).json();
  } catch (error) {
    res.status(404).json(error.message)
  }
}
