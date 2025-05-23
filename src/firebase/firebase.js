// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVINNCTQtkVT6ok0O2OblBGe7es0coxZU",
  authDomain: "fishdatabase-144b6.firebaseapp.com",
  databaseURL: "https://fishdatabase-144b6-default-rtdb.firebaseio.com",
  projectId: "fishdatabase-144b6",
  storageBucket: "fishdatabase-144b6.firebasestorage.app",
  messagingSenderId: "976219283812",
  appId: "1:976219283812:web:1a7ac37cd8081755db1a71",
  measurementId: "G-EKFWJ7KJQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database };