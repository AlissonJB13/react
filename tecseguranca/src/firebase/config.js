// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJTGROHvFwO5cTSyHGjO5pu5-R6uTxnJY",
  authDomain: "tecseguranca-133e7.firebaseapp.com",
  projectId: "tecseguranca-133e7",
  storageBucket: "tecseguranca-133e7.appspot.com",
  messagingSenderId: "775777553980",
  appId: "1:775777553980:web:2ffa17c91148df3983fd39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
