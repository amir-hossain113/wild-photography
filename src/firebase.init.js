// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB4PfD2gtdMXGAD24uRwBF789Y-VVQyGc",
  authDomain: "wild-photographer-ccd52.firebaseapp.com",
  projectId: "wild-photographer-ccd52",
  storageBucket: "wild-photographer-ccd52.appspot.com",
  messagingSenderId: "536228536959",
  appId: "1:536228536959:web:1b60c9052a92ec0f7dd54a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;