// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2NbFXWDbH4JdkNnAIRsgxH-BGKLUhv14",
  authDomain: "g-s-digital-anchor.firebaseapp.com",
  databaseURL: "https://g-s-digital-anchor-default-rtdb.firebaseio.com/",
  projectId: "g-s-digital-anchor",
  storageBucket: "g-s-digital-anchor.appspot.com",
  messagingSenderId: "1062655604588",
  appId: "1:1062655604588:web:723a9ab58062c728c52549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }