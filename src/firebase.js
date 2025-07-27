import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJ7lgUwW4DvbI_TItJWiZ23hQRLrnevJQ",
  authDomain: "auth-development-2194e.firebaseapp.com",
  projectId: "auth-development-2194e",
  storageBucket: "auth-development-2194e.appspot.com", // ✅ to'g'rilandi
  messagingSenderId: "455471123017",
  appId: "1:455471123017:web:8c527b5261ebfa29154d98",
});

export const auth = app.auth();
export default app;



// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// const app = firebase.initializeApp({
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// });

// export const auth = app.auth();
// export default app;
