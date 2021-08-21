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