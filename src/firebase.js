// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf9cXLYabaiYi3uxvaNwg5cYn6AbnojYs",
  authDomain: "todo-app-d-3fc91.firebaseapp.com",
  projectId: "todo-app-d-3fc91",
  storageBucket: "todo-app-d-3fc91.firebasestorage.app",
  messagingSenderId: "915498706058",
  appId: "1:915498706058:web:9070c838733f8ff665b973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)