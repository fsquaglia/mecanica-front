// Import the functions you need from the SDKs you need
//app Boscarol Servicios en el proyecto Boscarol de Firebase

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; //almacenamiento de imágenes
import { getDatabase } from "firebase/database"; //realtime database para los Servicios

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZv3shaN41KDVfu_G2RvevxCDAekGer14",
  authDomain: "boscarol-f2a0a.firebaseapp.com",
  projectId: "boscarol-f2a0a",
  storageBucket: "boscarol-f2a0a.appspot.com",
  messagingSenderId: "528782560696",
  appId: "1:528782560696:web:a2ff5dfdb2d91bf2ec534d",
  measurementId: "G-QBSW9ZNXQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imagesDB = getStorage(app);
export const realtimeDB = getDatabase();
