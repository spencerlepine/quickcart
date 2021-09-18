import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from 'config';

const app = firebase.initializeApp(firebaseConfig);
export default app;

export const db = firebase.firestore();
export const auth = app.auth();
export const storage = firebase.storage();