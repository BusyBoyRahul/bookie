// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDchlSWQjm3ynv1V7QO6y22y3gtRP_PGGo",
  authDomain: "bookie-21c1a.firebaseapp.com",
  projectId: "bookie-21c1a",
  storageBucket: "bookie-21c1a.appspot.com",
  messagingSenderId: "358639501310",
  appId: "1:358639501310:web:bf3f9491a257b128938aaf",
  measurementId: "G-DSN8MCBG9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
