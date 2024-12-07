// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZJnAR3OkXeRPofvpmiTfuAE2bsEMXSM",
  authDomain: "datasiswa-pplg.firebaseapp.com",
  databaseURL:
    "https://datasiswa-pplg-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "datasiswa-pplg",
  storageBucket: "datasiswa-pplg.firebasestorage.app",
  messagingSenderId: "308458282415",
  appId: "1:308458282415:web:f0d4505a04ffcc4f64e35a",
  measurementId: "G-4GHM687HBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };