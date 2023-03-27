import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeRwMNO1--JKpIfZXpdc_UNK5edjnVlUU",
  authDomain: "home-finder-f9654.firebaseapp.com",
  projectId: "home-finder-f9654",
  storageBucket: "home-finder-f9654.appspot.com",
  messagingSenderId: "938814513363",
  appId: "1:938814513363:web:8b79d941bb0a652eedf426",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
