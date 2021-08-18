import { auth, db } from '../config.js';
import { ALL_USERS, USER_CART } from '../firebaseSchema.js';

export const fetchAll = successCb => {
  const { uid: userId } = auth.currentUser;

  db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .get()
    .then(data => {
      const docs = data.docs || [];
      const cartData = docs.map(firebaseDoc => firebaseDoc.data());
      successCb(cartData);
    })
    .catch(error => console.log(error));
};

export const saveItem = (item, successCb) => {
  const { uid: userId } = auth.currentUser;
  const { _id: id } = item;

  const itemDocRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
    .doc(id);

  itemDocRef
    .get()
    .then(doc => {
      let cartItem = {};
      if (doc.exists) {
        cartItem = { ...doc.data() };
        cartItem['quantity'] += 1;
      } else {
        cartItem = { ...item };
      }
      itemDocRef.set(cartItem).then(successCb);
    })
    .catch(error => console.log(error));
};

export const removeItem = async (itemID, successCb) => {
  const { uid: userId } = auth.currentUser;

  const itemDocRef = db
    .collection(ALL_USERS)
    .doc(userId)
    .collection(USER_CART)
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
