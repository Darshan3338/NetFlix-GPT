// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDUsjt5huiaVE6l13qBFnvd3an1tg1Hg",
  authDomain: "netflixgpt-cebd3.firebaseapp.com",
  projectId: "netflixgpt-cebd3",
  storageBucket: "netflixgpt-cebd3.firebasestorage.app",
  messagingSenderId: "744441736945",
  appId: "1:744441736945:web:f9531ed6b22a03589f4350",
  measurementId: "G-7Z6CM8M9LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
