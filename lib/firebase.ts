// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3D1GX02DAv-6Tk-hdVKd0rkRgcz_gXEM",
  authDomain: "emr-v1-test-ff55e.firebaseapp.com",
  projectId: "emr-v1-test-ff55e",
  storageBucket: "emr-v1-test-ff55e.appspot.com",
  messagingSenderId: "102142556645",
  appId: "1:102142556645:web:895ca855669248dbd0570c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

