import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6KH8H-GQdVRNgo9NQ8EGpZvWhb2kN69c",
    authDomain: "challenge-7d965.firebaseapp.com",
    databaseURL: "https://challenge-7d965.firebaseio.com",
    projectId: "challenge-7d965",
    storageBucket: "challenge-7d965.appspot.com",
    messagingSenderId: "720823475076",
    appId: "1:720823475076:web:11a1b855b2f77edf4f1bd1",
    measurementId: "G-RNG4E36HHY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };