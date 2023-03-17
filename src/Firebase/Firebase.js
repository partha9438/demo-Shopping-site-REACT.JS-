// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase}from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEFvDwxINkoR0AjDaGDPBcwniZSYESp_4",
  authDomain: "shopers-stop-1332a.firebaseapp.com",
  projectId: "shopers-stop-1332a",
  storageBucket: "shopers-stop-1332a.appspot.com",
  messagingSenderId: "66881641324",
  appId: "1:66881641324:web:f1d04eb26ed0027ce9f149"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth=getAuth(firebase);
export const database=getDatabase(firebase)
export default firebase;