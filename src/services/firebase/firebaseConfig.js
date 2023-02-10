
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjNeyK3_ry8iy0jwUM_WRmCLdyCtvpPzQ",
  authDomain: "badcomercefinal.firebaseapp.com",
  projectId: "badcomercefinal",
  storageBucket: "badcomercefinal.appspot.com",
  messagingSenderId: "438346305527",
  appId: "1:438346305527:web:c09bad8bc4dc907eea68f2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)