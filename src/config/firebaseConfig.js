import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzJV7qZKuJ8s2Xjygxuj072Atwv7mLvkI",
  authDomain: "rffd-project.firebaseapp.com",
  projectId: "rffd-project",
  storageBucket: "rffd-project.appspot.com",
  messagingSenderId: "737736712738",
  appId: "1:737736712738:web:8768853fb822cb314f607b",
  measurementId: "G-GQTL0SXVCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
