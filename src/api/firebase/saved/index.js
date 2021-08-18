import { auth, db } from "./index";
import { ALL_USERS, SAVED_CATEGORIES } from "../userSchema.js";

export const fetchCategory = (categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .get()
    .then((data) => {
      // get the data of ALL docs stored here
      // process the data and come up with 3-8 recommended products
      successCb("under construction - visit api/firebase/suggesting/index.js");
    })
    .catch((error) => console.log(err));
};

export const createItem = (newItem, categoryID, successCb) => {
  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .set(newItem)
    .then((res) => successCb(updatedItem))
    .catch((error) => console.log(err));
};

export const updateItem = (updatedItem, categoryID, successCb) => {
  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .set(updatedItem)
    .then((res) => successCb(updatedItem))
    .catch((error) => console.log(err));
};

export const fetchItem = (itemID, categoryID, successCb) => {
  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .get()
    .then((data) => successCb(data))
    .catch((error) => console.log(err));
};

export const deleteItem = (itemID, categoryID, successCb) => {
  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .collection(CATEGORY_ITEMS)
    .doc(itemID)
    .delete()
    .then((res) => successCb(res))
    .catch((error) => console.log(err));
};
