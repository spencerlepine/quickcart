import { auth, storage, db } from '../config.js';
import { ALL_USERS, USER_ACCOUNT, ACCOUNT_DETAILS } from '../firebaseSchema.js';

export const fetchDetails = successCb => {
  const { uid: userId } = auth.currentUser;

  db.collection(ALL_USERS)
    .doc(userId)
    .collection(USER_ACCOUNT)
    .doc(ACCOUNT_DETAILS)
    .get()
    .then(data => successCb(data))
    .catch(error => console.log(error));
};

export const signInWithEmailAndPassword = (email, password, successCb) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      successCb(userCredential.user);
    })
    .catch(error => console.log(error));
};

export const createUserWithEmailAndPassword = (
  displayName,
  email,
  password,
  successCb,
) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;

      user.updateProfile({
        displayName: displayName,
      });

      const newUser = {
        ...user,
        displayName: displayName,
        savedItemCount: 0,
        joinDate: new Date() || '00-00-00',
      };

      db.collection(ALL_USERS)
        .doc(user.uid)
        .collection(USER_ACCOUNT)
        .doc(ACCOUNT_DETAILS)
        .set(newUser, { merge: true })
        .then(() => {
          successCb(newUser);
        });
    })
    .catch(error => console.log(error));
};

export const updateProfilePic = (newFile, successCb) => {
  if (!newFile) {
    return;
  }

  const user = auth.currentUser;
  const storageRef = storage.ref(`${user.uid}/profilePicture/avatar.png`);

  storageRef
    .put(newFile)
    .then(() => {
      storageRef.getDownloadURL().then(url => {
        user.updateProfile({
          photoURL: url,
        });

        successCb(url);
      });
    })
    .catch(error => console.log(error));
};

export const signOut = successCb => {
  auth
    .signOut()
    .then(() => {
      successCb(true);
    })
    .catch(error => console.log(error));
};

export const sendPasswordResetEmail = (email, successCb) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      successCb(true);
    })
    .catch(error => console.log(error));
};

export const updateEmail = (email, successCb) => {
  auth.currentUser
    .updateEmail(email)
    .then(() => {
      successCb(true);
    })
    .catch(error => console.log(error));
};

export const updatePassword = (password, successCb) => {
  auth.currentUser
    .updatePassword(password)
    .then(() => {
      successCb(true);
    })
    .catch(error => console.log(error));
};
