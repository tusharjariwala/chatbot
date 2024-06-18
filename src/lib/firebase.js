import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtq8WNY5UIRBev8EUdXQvc8lijnC_MsQw",
  authDomain: "reactchatbot-fea88.firebaseapp.com",
  projectId: "reactchatbot-fea88",
  storageBucket: "reactchatbot-fea88.appspot.com",
  messagingSenderId: "756552260732",
  appId: "1:756552260732:web:47badfc6c418e21e4efdf9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
