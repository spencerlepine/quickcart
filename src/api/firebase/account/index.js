import { auth, db } from "../config.js";
import { ALL_USERS, USER_ACCOUNT, ACCOUNT_DETAILS } from "../firebaseSchema.js";

export const fetchDetails = (successCb) => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(USER_ACCOUNT)
    .doc(ACCOUNT_DETAILS)
    .get()
    .then((data) => successCb(data))
    .catch((error) => console.log(err));
};
