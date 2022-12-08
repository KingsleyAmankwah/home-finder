import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq4dAWkmERLB_Ryat7o5wudk9s85GN9wY",
  authDomain: "home-finder-7ca0e.firebaseapp.com",
  projectId: "home-finder-7ca0e",
  storageBucket: "home-finder-7ca0e.appspot.com",
  messagingSenderId: "569693466130",
  appId: "1:569693466130:web:d6cd62ee1f8ecf4714b2cb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
