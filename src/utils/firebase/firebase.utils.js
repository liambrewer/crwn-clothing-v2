import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0yirPyOo_uiH-skOgEaPynUmDxBZLJx8',
  authDomain: 'crwn-db-v2-a8483.firebaseapp.com',
  projectId: 'crwn-db-v2-a8483',
  storageBucket: 'crwn-db-v2-a8483.appspot.com',
  messagingSenderId: '518251825920',
  appId: '1:518251825920:web:0d2d2906a6bac3126541e5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
