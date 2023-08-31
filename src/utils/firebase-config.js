// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth}  from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDep6Br_MskICRua60C72do4TYsAah8gHk",
  authDomain: "react-netfflix-clone-website.firebaseapp.com",
  projectId: "react-netfflix-clone-website",
  storageBucket: "react-netfflix-clone-website.appspot.com",
  messagingSenderId: "450587695378",
  appId: "1:450587695378:web:80d2a1c0116f8a53303bcb",
  measurementId: "G-E5J163J9V2"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);