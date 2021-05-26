import { db } from "../connection/firebase.js"

export const addCategory = async (req, res) => {
  try {
    const { userId } = req.params
    const { newCategory } = req.body
    
    // Get a ref to the categories DOC
    const categoryDocRef = await db.collection('users')
      .doc(userId)
      .collection('userCategories')
      .doc(newCategory)

    // Save this category
    await categoryDocRef.get()
      .then(async (docSnapshot) => {
        if (!docSnapshot.exists) {
          const newCategories = { id: newCategory }
          categoryDocRef.set(newCategories)
          res.status(200).json(newCategories);
          return
        }
    });
  } catch (error) {
    res.status(404).json(error.message)
  }
}

export const getGroceryCategories = async (req, res) => {
  try {
      const { userId } = req.params

      // Get a ref to the categories DOC
      const categoryCollection = await db.collection('users')
        .doc(userId)
        .collection('userCategories')
        .get()
      
      if (categoryCollection.docs) {
        // // Save this category
        const categories = await categoryCollection.docs.map(doc => doc.data()["id"])
        res.status(200).json(categories);
      } else {
        const sampleCategories = ['Grains', 'Bread', 'Breakfast', 'Dairy', 'Fruits', 'Vegetables', 'Pantry', 'Snacks', 'Meat', 'Beverages', 'Condements']
        res.status(201).json(sampleCategories);
      }
  } catch (error) {
      res.status(404).json(error.message);
  }
};