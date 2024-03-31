// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMjtKh7yK0LA2oL5rKbnMvFvXdCWxmag8",
  authDomain: "miniblog-141f8.firebaseapp.com",
  projectId: "miniblog-141f8",
  storageBucket: "miniblog-141f8.appspot.com",
  messagingSenderId: "156741188310",
  appId: "1:156741188310:web:d7d7d7a45be3c85080a777",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
