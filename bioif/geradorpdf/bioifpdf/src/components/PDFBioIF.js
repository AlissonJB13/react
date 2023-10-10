import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app); // Obtém a referência para o Storage

const getCollectionData = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "Postagem2"));

  // Substitua 'suaColecao' pelo nome da sua coleção

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export default getCollectionData;
