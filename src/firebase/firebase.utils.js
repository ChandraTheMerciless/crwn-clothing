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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error create user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;