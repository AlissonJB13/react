// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhbY5CfSdScqkb3NQfrCsW1AxitCuXwK0",
  authDomain: "bioif-39a18.firebaseapp.com",
  projectId: "bioif-39a18",
  storageBucket: "bioif-39a18.appspot.com",
  messagingSenderId: "342696241074",
  appId: "1:342696241074:web:b0caa197dfdde21ac526ab",
  measurementId: "G-5LVFN6Y5DW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para obter os dados da coleção
const getCollectionData = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "Postagem2")); // Substitua 'suaColecao' pelo nome da sua coleção

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export default getCollectionData;
