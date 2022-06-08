// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "tasowebpage.firebaseapp.com",
  projectId: "tasowebpage",
  storageBucket: "tasowebpage.appspot.com",
  messagingSenderId: "822574389840",
  appId: "1:822574389840:web:afdd3fe27781a02e6b4f55",
  measurementId: "G-XPN31K3P4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
