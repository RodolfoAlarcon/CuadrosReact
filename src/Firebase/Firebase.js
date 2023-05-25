// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLDGl1JK6Y5pY9TuktxFEGvct63zD1Wbg",
    authDomain: "cuadros-react.firebaseapp.com",
    projectId: "cuadros-react",
    storageBucket: "cuadros-react.appspot.com",
    messagingSenderId: "1031702847912",
    appId: "1:1031702847912:web:65e09523f590515a937d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);