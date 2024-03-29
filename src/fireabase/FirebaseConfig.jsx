// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzjJcqWn3Nxn0znpXymtSpydaVtPX9BN4",
  authDomain: "mycommerce-30045.firebaseapp.com",
  databaseURL: "https://mycommerce-30045-default-rtdb.firebaseio.com",
  projectId: "mycommerce-30045",
  storageBucket: "mycommerce-30045.appspot.com",
  messagingSenderId: "505098421644",
  appId: "1:505098421644:web:020aa5e131dbe0a40b02a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}