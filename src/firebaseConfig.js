// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM947xNinRPftzUBmNXPZ5pXqc_cW7M4Q",
  authDomain: "little-lemon-restaurant-f2778.firebaseapp.com",
  projectId: "little-lemon-restaurant-f2778",
  databaseURL: "https://little-lemon-restaurant-f2778-default-rtdb.asia-southeast1.firebasedatabase.app.firebaseio.com",
  storageBucket: "little-lemon-restaurant-f2778.appspot.com",
  messagingSenderId: "443886824361",
  appId: "1:443886824361:web:bcde99ce0d411b3572f2b8",
  measurementId: "G-D9ZYBHG1W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Realtime Database
const rtdb = getDatabase(app);



export {db, rtdb};