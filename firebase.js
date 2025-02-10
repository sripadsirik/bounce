// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: REACT_FIREBASE_API_KEY,
    // authDomain: REACT_FIREBASE_AUTH_DOMAIN,
    // projectId: REACT_FIREBASE_PROJECT_ID,
    // storageBucket: REACT_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: REACT_FIREBASE_MESSENGER_SENDER_ID,
    // appId: REACT_FIREBASE_STORAGE_APP_ID,
    // measurementId: REACT_FIREBASE_MEASUREMENT_ID

    apiKey: "AIzaSyCKcxg1Syl-KR9swdzhA9t0yrP1cUpwx8Y",
    authDomain: "bounce4-a7b93.firebaseapp.com",
    projectId: "bounce4-a7b93",
    storageBucket: "bounce4-a7b93.firebasestorage.app",
    messagingSenderId: "551086613483",
    appIdd: "1:551086613483:web:4c27b3ff4908a5a0f62fae",
    measurementId: "G-3BJQCSHN8X"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

