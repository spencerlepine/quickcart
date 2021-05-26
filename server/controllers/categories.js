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

      let sampleCategories = new Set(['bread', 'beverages', 'breakfast', 'canned goods', 'condements', 'dairy', 'desserts', 'fruit', 'grains', 'pantry', 'pasta', 'vegetables'])

      if (categoryCollection.docs.length > 0) {
        categoryCollection.docs.forEach(doc => sampleCategories.add(doc.data()["id"]))
        res.status(200).json(Array.from(sampleCategories));
      } else {
        console.log("passing down sampleCategories to res:" + sampleCategories)
        res.status(200).json(Array.from(sampleCategories));
      }
  } catch (error) {
      res.status(404).json(error.message);
  }
};