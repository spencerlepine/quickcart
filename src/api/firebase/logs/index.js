import { auth, db } from '../config.js';
import { ALL_USERS, CART_LOGS, LOG_ITEMS } from '../firebaseSchema.js';

export const logItem = (item, logID, successCb) => {
  const { uid: userId } = auth.currentUser;

  // Trim the item in for cart log storage
  const itemLogObj = {
    _id: item._id,
    name: item.name,
    category: item.category,
    servings_per: item.servings_per,
    purchase_size: item.purchase_size,
    purchase_price: item.purchase_price,
    quantity: item.quantity,
  };

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(CART_LOGS)
    .doc(logID)
    .collection(LOG_ITEMS)
    .doc(itemLogObj['_id'])
    .set(itemLogObj)
    .then(() => successCb(itemLogObj))
    .catch(error => console.log(error));
};

export const fetchItem = (docReferenceID, successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(CART_LOGS)
    .doc(docReferenceID)
    .get()
    .then(doc => {
      if (doc.exists) {
        successCb(doc.data());
      }
    })
    .catch(error => console.log(error));
};

export const fetchAll = successCb => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(CART_LOGS)
    .get()
    .then(data => {
      const docs = data.docs || [];
      const logDocs = docs.map(firebaseDoc => firebaseDoc.data());
      successCb(logDocs);
    })
    .catch(error => console.log(error));
};
