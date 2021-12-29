import { initializeApp } from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBcuXAx7DfCXZx_G1bOXosiA3iCPt129vI",
  authDomain: "small-talk-b67e4.firebaseapp.com",
  projectId: "small-talk-b67e4",
  storageBucket: "small-talk-b67e4.appspot.com",
  messagingSenderId: "163909673457",
  appId: "1:163909673457:web:04340c1779c8b6a3e42450"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const db=firebase.firestore();
export const auth= firebase.auth();