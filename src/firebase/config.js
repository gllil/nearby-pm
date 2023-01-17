// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG524W5nxpWtk5vs_p_FUEQn_NJp1oo-w",
  authDomain: "nearby-pm-20a9e.firebaseapp.com",
  projectId: "nearby-pm-20a9e",
  storageBucket: "nearby-pm-20a9e.appspot.com",
  messagingSenderId: "328272019093",
  appId: "1:328272019093:web:f36375ba8b450e63c2e59c",
  measurementId: "G-Q3LKCBKS08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
