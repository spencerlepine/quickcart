import { auth, db } from "./index";
import { ALL_USERS, SAVED_CATEGORIES } from "../userSchema.js";

export const getCategorySuggestions = (categoryID, successCb) => {
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

export const getItemReplacement = (badItem, categoryID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(SAVED_CATEGORIES)
    .doc(categoryID)
    .get()
    .then((data) => {
      const docs = data.docs || [];
      const similarItems = docs.map((firebaseDoc) => firebaseDoc.data());

      // filter the OLD item OUT
      // find a similar item as a replacement
      successCb("under construction - visit api/firebase/suggesting/index.js");
    })
    .catch((error) => console.log(err));
};
