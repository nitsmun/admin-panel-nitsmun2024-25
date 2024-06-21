// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNzWMrngCNSJpFnAcN2i23X_YOgibwwto",
    authDomain: "nitsmun-auth-2024-25.firebaseapp.com",
    projectId: "nitsmun-auth-2024-25",
    storageBucket: "nitsmun-auth-2024-25.appspot.com",
    messagingSenderId: "680655237904",
    appId: "1:680655237904:web:6c55e3d19393a276f7ab95",
    measurementId: "G-60E4EYK30S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };