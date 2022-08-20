import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYkpl6tVvyEL_5-1lqpROodl39UcLwRA8",
  authDomain: "new-netflix-clone-ef098.firebaseapp.com",
  projectId: "new-netflix-clone-ef098",
  storageBucket: "new-netflix-clone-ef098.appspot.com",
  messagingSenderId: "54730393853",
  appId: "1:54730393853:web:d44edc5a9ff7f03eefd694"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);