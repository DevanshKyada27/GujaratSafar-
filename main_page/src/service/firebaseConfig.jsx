// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBggoQCvU_PxptoeMPP4H6J4Ekc17xBOk",
  authDomain: "gujaratsafar-7f2b1.firebaseapp.com",
  projectId: "gujaratsafar-7f2b1",
  storageBucket: "gujaratsafar-7f2b1.firebasestorage.app",
  messagingSenderId: "420500752226",
  appId: "1:420500752226:web:4d29d22c2be1fe4777ce3b",
  measurementId: "G-LP71FXE4Q1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);