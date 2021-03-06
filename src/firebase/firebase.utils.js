import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyD91juIAU78B8m_eCVGdNqAEGJZAN_r_oc",
        authDomain: "crown-db-16642.firebaseapp.com",
        projectId: "crown-db-16642",
        storageBucket: "crown-db-16642.appspot.com",
        messagingSenderId: "1080524010733",
        appId: "1:1080524010733:web:5e9dd66039e3eb0b54c8e4",
        measurementId: "G-YCS7WMG5E5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;