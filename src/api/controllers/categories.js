import { auth, db } from "../firebase.js"

const CATEGORY_KEY = "id"

export const addCategory = async (newCategoryName) => {
  try {
    const { uid: userId } = auth.currentUser
    // Get a ref to the categories DOC
    const categoryDocRef = await db.collection('users')
      .doc(userId)
      .collection('userCategories')
      .doc(newCategoryName)

    // Save this category
    await categoryDocRef.get()
      .then(async (docSnapshot) => {
        if (!docSnapshot.exists) {
          const newCategories = { [CATEGORY_KEY]: newCategoryName }
          categoryDocRef.set(newCategories)
          return
        }
    });
  } catch (error) {
    console.log(error.message)
  }
}

export const getGroceryCategories = async () => {
  try {
    const { uid: userId } = auth.currentUser

    // Get a ref to the categories DOC
    const categoryCollection = await db.collection('users')
      .doc(userId)
      .collection('userCategories')
      .get()

    let sampleCategories = new Set(['bread', 'beverages', 'breakfast', 'canned goods', 'condements', 'dairy', 'desserts', 'fruit', 'grains', 'pantry', 'pasta', 'vegetables', 'snacks', 'dinner'])
    
    if (categoryCollection.docs.length > 0) {
      categoryCollection.docs.forEach(doc => sampleCategories.add(doc.data()[CATEGORY_KEY]))
    }
    return Array.from(sampleCategories)
  } catch (error) {
    console.log(error.message)
    return []
  }
};