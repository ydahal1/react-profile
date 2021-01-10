import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ-gxFL5kffVRJJOP2ni6eCaqP0SMZgGM",
  authDomain: "profile-c2927.firebaseapp.com",
  projectId: "profile-c2927",
  storageBucket: "profile-c2927.appspot.com",
  messagingSenderId: "411246298789",
  appId: "1:411246298789:web:91375cbab79ea317e32f4c",
  measurementId: "G-D76LQW1CW6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
