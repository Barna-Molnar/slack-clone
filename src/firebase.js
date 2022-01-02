// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkVV-E9Ad2U9-4EBHbQQZf6ihYP_CYX-c",
  authDomain: "slack-clone-44a49.firebaseapp.com",
  projectId: "slack-clone-44a49",
  storageBucket: "slack-clone-44a49.appspot.com",
  messagingSenderId: "603261692999",
  appId: "1:603261692999:web:d1e58fdfddccb8d0a89562"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };