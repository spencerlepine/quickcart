import { auth, db } from "../config.js";
import { ALL_USERS, USER_CART } from "../firebaseSchema.js";

export const fetchAll = (callback) => {
  const { uid: userId } = auth.currentUser;

  await db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .get()
    .then((data) => {
      let docs = data.docs || [];
      let cartData = docs.map((firebaseDoc) => firebaseDoc.data());
      successCb(cartData);
    })
    .catch((error) => console.log(err));
};

export const saveItem = (item, callback) => {
  const { uid: userId } = auth.currentUser;
  const { _id: id } = item;

  const itemDocRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(id);

  itemDocRef
    .get()
    .then((doc) => {
      let cartItem = {};
      if (doc.exists) {
        cartItem = { ...doc.data() };
        cartItem["quantity"] += 1;
      } else {
        cartItem = { ...item };
      }
      itemDocRef.set(cartItem).then(successCb);
    })
    .catch((error) => console.log(err));
};

export const removeItem = async (id, successCb) => {
  const { uid: userId } = auth.currentUser;

  const itemDocRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(groceryId);

  itemDocRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        itemDocRef.delete();
      }
    })
    .catch((error) => console.log(err));
};
