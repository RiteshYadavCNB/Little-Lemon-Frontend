// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM947xNinRPftzUBmNXPZ5pXqc_cW7M4Q",
  authDomain: "little-lemon-restaurant-f2778.firebaseapp.com",
  projectId: "little-lemon-restaurant-f2778",
  storageBucket: "little-lemon-restaurant-f2778.appspot.com",
  messagingSenderId: "443886824361",
  appId: "1:443886824361:web:bcde99ce0d411b3572f2b8",
  measurementId: "G-D9ZYBHG1W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

const analytics = getAnalytics(app);