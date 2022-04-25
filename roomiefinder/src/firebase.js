// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzRlIm44fBp3XUq5kaeZz9bUM2zI7FfSc",
  authDomain: "roomie-finder-e667a.firebaseapp.com",
  databaseURL: "https://roomie-finder-e667a.firebaseio.com",
  projectId: "roomie-finder-e667a",
  storageBucket: "roomie-finder-e667a.appspot.com",
  messagingSenderId: "792924653168",
  appId: "1:792924653168:web:5e87aea509f64d256116b5",
  measurementId: "G-M82HBC1TKV"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const database = firebaseapp.firestore();

export default database;