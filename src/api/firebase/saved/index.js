import { auth, db } from './index';
import { ALL_USERS, SAVED_CATEGORIES, CATEGORY_ITEMS } from '../userSchema.js';

export const fetchCategory = (categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .get()
    .then(data => {
      // get the data of ALL docs stored here
      // process the data and come up with 3-8 recommended products
      successCb('under construction - visit api/firebase/suggesting/index.js', data);
    })
    .catch(error => console.log(error));
};

export const createItem = (newItem, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;
  const { _id: itemID } = newItem;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .set(newItem)
    .then(() => successCb(newItem))
    .catch(error => console.log(error));
};

export const updateItem = (updatedItem, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;
  const { _id: itemID } = updatedItem;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .set(updatedItem)
    .then(() => successCb(updatedItem))
    .catch(error => console.log(error));
};

export const fetchItem = (itemID, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .get()
    .then(data => successCb(data))
    .catch(error => console.log(error));
};

export const deleteItem = (itemID, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .delete()
    .then(res => successCb(res))
    .catch(error => console.log(error));
};
