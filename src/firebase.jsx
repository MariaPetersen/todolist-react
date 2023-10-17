import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDf9FsSiltUv8XVmUE1huXbbVNImLV3Ye0",
  authDomain: "todolist-1064d.firebaseapp.com",
  projectId: "todolist-1064d",
  storageBucket: "todolist-1064d.appspot.com",
  messagingSenderId: "66933483283",
  appId: "1:66933483283:web:e4b9271fbd8a3c20761ce6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
