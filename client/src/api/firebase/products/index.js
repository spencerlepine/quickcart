import { db } from '../config';
import { ALL_PRODUCTS, CATEGORY_ITEMS } from '../firebaseSchema.js';
import { FETCH_ITEM_LIMIT } from 'config';

export const fetchCategory = (categoryID, lastId, successCb) => {
  db.collection(ALL_PRODUCTS)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .orderBy('_id')
    .startAt(lastId || '')
    .limit(FETCH_ITEM_LIMIT)
    .get()
    .then(data => {
      const allDocs = data.docs.map(firebaseDoc => firebaseDoc.data());
      successCb(allDocs);
    })
    .catch(error => console.log(error));
};

export const createItem = (newItem, categoryID, successCb) => {
  const { _id: itemID } = newItem;

  const categoryCollection = db.collection(ALL_PRODUCTS)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS);

  if (itemID) {
    categoryCollection
      .doc(itemID)
      .set(newItem)
      .then(() => successCb(newItem))
      .catch(error => console.log(error));
  } else {
    categoryCollection
      .add(newItem)
      .then(docRef => {
        docRef.set({
          _id: docRef.id,
        }, { merge: true });
        successCb({ ...newItem, _id: docRef.id });
      })
      .catch(error => console.log(error));
  }
};

// export const updateItem = (updatedItem, categoryID, successCb) => {
//   const { uid: userId } = auth.currentUser;
//   const { _id: itemID } = updatedItem;

//   db.collection(ALL_USERS)
//     .doc(userId)
//     .collection(SAVED_CATEGORIES)
//     .doc(categoryID)
//     .collection(CATEGORY_ITEMS)
//     .doc(itemID)
//     .set({
//       ...updatedItem,
//     }, { merge: true })
//     .then(() => successCb(updatedItem))
//     .catch(error => console.log(error));
// };

export const fetchItem = (itemID, categoryID, successCb) => {
  db.collection(ALL_PRODUCTS)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .get()
    .then(data => successCb(data))
    .catch(error => console.log(error));
};

// export const deleteItem = (itemID, categoryID, successCb) => {
//   const { uid: userId } = auth.currentUser;

//   db.collection(ALL_USERS)
//     .doc(userId)
//     .collection(SAVED_CATEGORIES)
//     .doc(categoryID)
//     .collection(CATEGORY_ITEMS)
//     .doc(itemID)
//     .delete()
//     .then(res => successCb(res))
//     .catch(error => console.log(error));
// };
