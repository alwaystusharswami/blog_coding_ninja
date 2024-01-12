// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKxmDLJdc1wEpYor8xf8tSF4_mqHoW-I",
  authDomain: "react-blog-pratice-project.firebaseapp.com",
  projectId: "react-blog-pratice-project",
  storageBucket: "react-blog-pratice-project.appspot.com",
  messagingSenderId: "259830838282",
  appId: "1:259830838282:web:19d03582be2830efcc9bf3",
  measurementId: "G-F8PLQ6MMWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);