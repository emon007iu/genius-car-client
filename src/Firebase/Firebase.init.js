// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH39gyWTyS3KXAHIE5JfnD4Fm-2X7kGyA",
  authDomain: "genius-car-services-5f315.firebaseapp.com",
  projectId: "genius-car-services-5f315",
  storageBucket: "genius-car-services-5f315.appspot.com",
  messagingSenderId: "555182729820",
  appId: "1:555182729820:web:3120310959ffa23501d499",
  measurementId: "G-P2FTF7QQLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);

 const auth = getAuth(app)
 export default auth;