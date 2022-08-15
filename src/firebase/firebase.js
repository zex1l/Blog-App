import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const auth = getAuth(app)