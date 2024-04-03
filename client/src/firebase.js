// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-de50b.firebaseapp.com",
  projectId: "mern-blog-de50b",
  storageBucket: "mern-blog-de50b.appspot.com",
  messagingSenderId: "915810289960",
  appId: "1:915810289960:web:1db34c00ec512c7d41681d",
  measurementId: "G-2451D3GG2S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
