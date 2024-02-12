import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaP0JFfu92UXvLKs9fNnmZbv3DSiZ-HSw",
  authDomain: "sharpai-frontend.firebaseapp.com",
  projectId: "sharpai-frontend",
  storageBucket: "sharpai-frontend.appspot.com",
  messagingSenderId: "990332505575",
  appId: "1:990332505575:web:0edfb9156345e5383cc142"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);