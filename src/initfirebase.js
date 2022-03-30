import firebase from "firebase/compat/app"
// import "firebase/compat/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAPjnvQoZ-kDO3H3VILgEBKSEFVmhWDCtU",
  authDomain: "smart-restaurant-3e84a.firebaseapp.com",
  databaseURL: "https://smart-restaurant-3e84a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-restaurant-3e84a",
  storageBucket: "smart-restaurant-3e84a.appspot.com",
  messagingSenderId: "1000731182677",
  appId: "1:1000731182677:web:56cfb572f81164926f76dc",
  measurementId: "G-ZL6XRD9BH6"
};

// Initialize Firebase
const application = initializeApp(firebaseConfig);

// console.log(firestore)
// console.log(database)
// const db = getDatabase();
// const connectedRef = ref(rtdb, ".info/connected");
// onValue(connectedRef, (snap) => {
//   if (snap.val() === true) {
//     console.log("connected");
//   } else {
//     console.log("not connected");
//   }
// });


// console.log(application.options.databaseURL === firebaseConfig.databaseURL );  // true
// console.log('pass init')
export default application ;