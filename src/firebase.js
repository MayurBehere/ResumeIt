import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhhz6uB6MxAYKsWTdDjqVx9vbE2hPFZGY",
  authDomain: "resumeit-f5802.firebaseapp.com",
  projectId: "resumeit-f5802",
  storageBucket: "resumeit-f5802.appspot.com",
  messagingSenderId: "671839177320",
  appId: "1:671839177320:web:2b67e2c8066c7394e909dd",
  measurementId: "G-H4JE3Y3X72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app, auth};