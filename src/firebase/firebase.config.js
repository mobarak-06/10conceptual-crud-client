// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNO_T9HTiKPU78PtHDOvzzcCWiBxgUOM",
  authDomain: "conceptual-session-10.firebaseapp.com",
  projectId: "conceptual-session-10",
  storageBucket: "conceptual-session-10.appspot.com",
  messagingSenderId: "697184106500",
  appId: "1:697184106500:web:21dc651275b5c838b6dd51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;