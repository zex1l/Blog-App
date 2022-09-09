import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLc2qFIw9iSfDipn8nsP4bRhUFzW_oSuM",
  authDomain: "blog-react-app-4a104.firebaseapp.com",
  projectId: "blog-react-app-4a104",
  storageBucket: "blog-react-app-4a104.appspot.com",
  messagingSenderId: "207636405594",
  appId: "1:207636405594:web:884841fe5056a844ac2763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}