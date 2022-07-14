// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: "twitter-v1-690f0",
  authDomain: "twitter-v1-690f0.firebaseapp.com",
  storageBucket: "twitter-v1-690f0.appspot.com",
  messagingSenderId: "527359108035",
  appId: "1:527359108035:web:ba3e8dfa3a0cf012351376",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
