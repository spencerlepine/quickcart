import { auth, db } from '../config.js';
import { ALL_USERS, USER_CART, CATEGORY_ITEMS } from '../firebaseSchema.js';

export const fetchAll = successCb => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .get()
    .then(data => {
      const categoryDocs = data.docs || [];
      const cartData = categoryDocs.map(firebaseDoc => firebaseDoc.data());
      successCb(cartData);
    })
    .catch(error => console.log(error));
};

export const fetchCategory = (categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .get()
    .then(querySnapshot => {
      const items = querySnapshot.docs.map(firebaseDoc => firebaseDoc.data());
      successCb(items);
    })
    .catch(error => console.log(error));
};

export const saveItem = (item, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;
  const { _id: id } = item;

  // Add a filler value
  const categoryRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(categoryID);

  categoryRef.set({ 'categoryID': categoryID });

  categoryRef.collection(CATEGORY_ITEMS)
    .doc(id)
    .get()
    .then(doc => {
      let cartItem = {};
      if (doc.exists) {
        cartItem = { ...doc.data() };
        cartItem['quantity'] += 1;
        categoryRef.collection(CATEGORY_ITEMS).doc(id).update(cartItem).then(() => successCb(cartItem));
      } else {
        categoryRef.collection(CATEGORY_ITEMS).doc(id).set({ ...item, quantity: 1 }).then(() => successCb({ ...item, quantity: 1 }));
      }
    })
    .catch(error => console.log(error));
};

export const removeItem = async (itemID, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  const itemDocRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID);

  itemDocRef
    .get()
    .then(doc => {
      if (doc.exists) {
        itemDocRef.delete();
        successCb();
      }
    })
    .catch(error => console.log(error));
};

export const updateItem = async (item, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  const itemDocRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(item['_id']);

  itemDocRef
    .get()
    .then(doc => {
      if (doc.exists) {
        itemDocRef.set(item);
        successCb(item);
      }
    })
    .catch(error => console.log(error));
};


/* *** DELETE THIS *** */
function formatDate(d) {
  // Format to YEAR-MM-DD
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  return `${ye}-${mo}-${da}`;
}

export const logCartItem = async item => {
  try {
    const { uid: userId } = auth.currentUser;

    const today = new Date();
    const formattedDate = formatDate(today);

    // Get the user cartLogs collection
    const itemLogObj = {
      _id: item._id,
      name: item.name,
      category: item.category,
      purchase_price: item.purchase_price,
      quantity: item.quantity,
    };

    // Save the item
    await db.collection('users')
      .doc(userId)
      .collection('userCartLogs')
      .doc(formattedDate)
      .collection('cartItems')
      .doc(item._id)
      .set(itemLogObj);

    // Add a field to the collection to make it appear in queries
    await db.collection('users')
      .doc(userId)
      .collection('userCartLogs')
      .doc(formattedDate)
      .set({ logDate: formattedDate });

    console.log('saved cart log for', item.name);
  } catch (error) {
    console.log(error.message);
  }
};



// export const addToCart = async itemToAdd => {
//   try {
//     const { uid: userId } = auth.currentUser;

//     const itemToAddId = itemToAdd['_id'];

//     const cartItemRef = await db.collection('users')
//       .doc(userId)
//       .collection('userCart')
//       .doc(itemToAddId);

//     const result = await cartItemRef.get()
//       .then(async docSnapshot => {
//         if (docSnapshot.exists) {
//           const itemData = await docSnapshot.data();
//           const existingItem = {
//             ...itemData,
//             quantity: itemData.quantity + 1,
//           };
//           await cartItemRef.set(existingItem);
//           return existingItem;
//         } else {
//           const newCartItem = { ...itemToAdd, quantity: 1 };
//           await cartItemRef.set(newCartItem);
//           return { ...newCartItem, quantity: 1 };
//         }
//       });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };