// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdbrImPFAychEh-ipRL3KQGDIi8i-RFME",
  authDomain: "kcsc-db-home.firebaseapp.com",
  projectId: "kcsc-db-home",
  storageBucket: "kcsc-db-home.firebasestorage.app",
  messagingSenderId: "775663717925",
  appId: "1:775663717925:web:385d7797e68ab7997df9cc",
  measurementId: "G-SYD5K7P8LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, analytics, db };
