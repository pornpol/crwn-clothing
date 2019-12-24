import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBp1fujtZtZZOmvfnZGcBcMVu8rEUs1JHg",
  authDomain: "crown-db-6bcdf.firebaseapp.com",
  databaseURL: "https://crown-db-6bcdf.firebaseio.com",
  projectId: "crown-db-6bcdf",
  storageBucket: "crown-db-6bcdf.appspot.com",
  messagingSenderId: "318252467167",
  appId: "1:318252467167:web:f9a27429b965b274d5fa6a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
