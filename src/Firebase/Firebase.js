// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0mPYebyENjOayGB1NPiPM-i6I3nFLDHo",
    authDomain: "cuadrosreact.firebaseapp.com",
    projectId: "cuadrosreact",
    storageBucket: "cuadrosreact.appspot.com",
    messagingSenderId: "565028271152",
    appId: "1:565028271152:web:ee21e57670d83db34929f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);