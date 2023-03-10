// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import * as admin from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHRdhXbSGAKglujIEwabehPezg06aiCBU",
  authDomain: "codecamp-09-azerose.firebaseapp.com",
  projectId: "codecamp-09-azerose",
  storageBucket: "codecamp-09-azerose.appspot.com",
  messagingSenderId: "69793791158",
  appId: "1:69793791158:web:333ce8366784d78411fa17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const AdminApp = admin.initializeApp({
  credential: admin.credential.cert("codecamp-09-azerose-c19af0e32a50.json"),
});
export const AuthAdmin = AdminApp.auth();
export const Auth = getAuth(app);

export const Store = getFirestore(app);
export const Login = (email: string, password: string) => {
  return signInWithEmailAndPassword(Auth, email, password);
};
