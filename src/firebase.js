import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD9bLrP0M25MMPNinVau4SwmUFky3iutZM",
  authDomain: "clone-c712a.firebaseapp.com",
  databaseURL: "https://clone-c712a.firebaseio.com",
  projectId: "clone-c712a",
  storageBucket: "clone-c712a.appspot.com",
  messagingSenderId: "265388743543",
  appId: "1:265388743543:web:27b8bf8a2a6d6ad46b1f72"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };