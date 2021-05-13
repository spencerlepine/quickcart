import firebase from "firebase"
import dotenv from "dotenv"
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.SERVER_FIREBASE_API_KEY,
  authDomain: process.env.SERVER_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.SERVER_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SERVER_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SERVER_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.SERVER_FIREBASE_APP_ID,
  measurementId: process.env.SERVER_FIREBASE_MEASUREMENT_ID,
};

const app = firebase.default.initializeApp(firebaseConfig);
export const db = firebase.default.firestore()
export const auth = app.auth()

export default app