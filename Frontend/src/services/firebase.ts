//src /services/firebase.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


import {
  getFirestore,
} from 'firebase/firestore';

import {
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

import { setPersistence, browserSessionPersistence } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() };
export const db = getFirestore(Firebase);


// Ajustar la persistencia a session
setPersistence(auth, browserSessionPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});
