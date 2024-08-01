// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let analytics;

if (typeof window !== 'undefined') {
  // Import Firebase Analytics only in client-side environments
  const { getAnalytics, isSupported } = require("firebase/analytics");
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.error('Firebase Analytics is not supported in this environment:', error);
  });
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW6URysEZwikmDY_sNTwz8Po2aqYthTxk",
  authDomain: "pantry-tracker-2fc13.firebaseapp.com",
  projectId: "pantry-tracker-2fc13",
  storageBucket: "pantry-tracker-2fc13.appspot.com",
  messagingSenderId: "871951401894",
  appId: "1:871951401894:web:abe1992fdb800f38b88567",
  measurementId: "G-948Y0DZMD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, analytics };
