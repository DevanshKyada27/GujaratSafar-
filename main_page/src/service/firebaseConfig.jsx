// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_STORAGE_BUCKET",
  messagingSenderId: "YOUR_PROJECT_MSG_SENDER_ID",
  appId: "YOUR_PROJECT_APP_ID,
  measurementId: "YOUR_PROJECT_MEASUREMENT_ID"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
