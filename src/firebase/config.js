// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUNUACdxO5jGFml5I6gtwOULecVZTgers",
  authDomain: "movies-site-28444.firebaseapp.com",
  projectId: "movies-site-28444",
  storageBucket: "movies-site-28444.appspot.com",
  messagingSenderId: "651117037080",
  appId: "1:651117037080:web:ca7a9664607e94886e256d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFireStore(app)