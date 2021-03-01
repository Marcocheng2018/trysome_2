import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAZT3KlzKCkIX7Uq6mLh82BNXo8alr5T9M',
  authDomain: 'netflix-clone-18e53.firebaseapp.com',
  databaseURL: 'https://netflix-clone-18e53.firebaseio.com',
  projectId: 'netflix-clone-18e53',
  storageBucket: 'netflix-clone-18e53.appspot.com',
  messagingSenderId: '348394845247',
  appId: '1:348394845247:web:513b3d086f3ac2b049b48a',
  measurementId: 'G-28YLC8SK0C',
});

const db = firebaseApp.firestore();

export { db };
