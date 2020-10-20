import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAlgAklJhqmnFiLqks5bIVFXvFjiYV8Ae0",
  authDomain: "pragma-3546a.firebaseapp.com",
  databaseURL: "https://pragma-3546a.firebaseio.com",
  projectId: "pragma-3546a",
  storageBucket: "pragma-3546a.appspot.com",
  messagingSenderId: "1035120283171",
  appId: "1:1035120283171:web:70c0683b926c43904fab96",
  measurementId: "G-TXBPB54DV3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
