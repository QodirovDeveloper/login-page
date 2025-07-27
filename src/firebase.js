import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ7lgUwW4DvbI_TItJWiZ23hQRLrnevJQ",
  authDomain: "auth-development-2194e.firebaseapp.com",
  projectId: "auth-development-2194e",
  storageBucket: "auth-development-2194e.appspot.com", // <-- TUZATILDI
  messagingSenderId: "455471123017",
  appId: "1:455471123017:web:8c527b5261ebfa29154d98"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
