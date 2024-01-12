// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMBz1RbP9uH6Le4dJxbKVWVgdTZFwLLcE",
  authDomain: "blog-react-first.firebaseapp.com",
  projectId: "blog-react-first",
  storageBucket: "blog-react-first.appspot.com",
  messagingSenderId: "380384490142",
  appId: "1:380384490142:web:9476a8bed9546081dd418f",
  measurementId: "G-2Q0SDJ30LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);