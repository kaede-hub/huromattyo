// lib/firebase.js

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF5TbH56G_EeUAANs6lLKXmp3qrfZJxYQ",
  authDomain: "fir-772a9.firebaseapp.com",
  projectId: "fir-772a9",
  storageBucket: "fir-772a9.appspot.com",
  messagingSenderId: "1090041027925",
  appId: "1:1090041027925:web:2a587f7ae5304bf78ae3dc"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
