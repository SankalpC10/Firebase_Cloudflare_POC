// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO56CnElKIPjNrkwjwpFUrMhitoBvN_Kk",
  authDomain: "cloudflare-github-pages.firebaseapp.com",
  projectId: "cloudflare-github-pages",
  storageBucket: "cloudflare-github-pages.appspot.com",
  messagingSenderId: "946725837303",
  appId: "1:946725837303:web:826306797a854b428976f2",
  measurementId: "G-195DJMVG6L"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
