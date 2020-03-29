import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBfxJnXjQjUq-5oFEG3Coq4uyKyWRa3eBc",
  authDomain: "crwn-tutorial-db.firebaseapp.com",
  databaseURL: "https://crwn-tutorial-db.firebaseio.com",
  projectId: "crwn-tutorial-db",
  storageBucket: "crwn-tutorial-db.appspot.com",
  messagingSenderId: "482352493082",
  appId: "1:482352493082:web:0834043feb22210309d7a3",
  measurementId: "G-7RNE7G95D6"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;