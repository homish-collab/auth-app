import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-e9139.firebaseapp.com",
  projectId: "login-e9139",
  storageBucket: "login-e9139.appspot.com",
  messagingSenderId: "984668742594",
  appId: "1:984668742594:web:0005ea085553a1621c2c5b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
