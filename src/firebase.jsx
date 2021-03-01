import firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config()

const firebaseApp = firebase.initializeApp({
  apiKey: PROCESS.ENV.apiKey,
  authDomain: PROCESS.ENV.authDomain,
  databaseURL: PROCESS.ENV.databaseURL,
  projectId: PROCESS.ENV.projectId,
  storageBucket: PROCESS.ENV.storageBucket,
  messagingSenderId: PROCESS.ENV.messagingSenderId,
  appId: PROCESS.ENV.appId,
  measurementId: PROCESS.ENV.measurementId,
});

const db = firebaseApp.firestore();

export { db };
