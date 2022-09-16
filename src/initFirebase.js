// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDveyuXHU4DLTu_97XCwY9DPJAeW6lUOQo",
  authDomain: "question-duplic-landing-page.firebaseapp.com",
  databaseURL: "https://question-duplic-landing-page-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "question-duplic-landing-page",
  storageBucket: "question-duplic-landing-page.appspot.com",
  messagingSenderId: "941937617756",
  appId: "1:941937617756:web:7bbb0f372d1b432260af99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;