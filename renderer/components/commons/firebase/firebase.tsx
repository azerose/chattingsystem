import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHRdhXbSGAKglujIEwabehPezg06aiCBU",
  authDomain: "codecamp-09-azerose.firebaseapp.com",
  projectId: "codecamp-09-azerose",
  storageBucket: "codecamp-09-azerose.appspot.com",
  messagingSenderId: "69793791158",
  appId: "1:69793791158:web:333ce8366784d78411fa17",
  measurementId: "G-2DHKR7P4R2",
};

export const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
