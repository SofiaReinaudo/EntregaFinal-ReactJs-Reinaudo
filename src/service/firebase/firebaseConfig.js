import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAD47lpNhLhr4xTAZHhDTrUJAPfHx6vN5Q",
    authDomain: "made-in-heaven-7f6b1.firebaseapp.com",
    projectId: "made-in-heaven-7f6b1",
    storageBucket: "made-in-heaven-7f6b1.appspot.com",
    messagingSenderId: "306509984440",
    appId: "1:306509984440:web:d0937c7621148d5b27ba4d",
    measurementId: "G-JH0Z26SL4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)