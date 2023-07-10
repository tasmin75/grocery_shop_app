import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC58g-eUvBnfdDmVJIEQCaBr2MZIxGghAU",
  authDomain: "grocery-app-abe19.firebaseapp.com",
  projectId: "grocery-app-abe19",
  storageBucket: "grocery-app-abe19.appspot.com",
  messagingSenderId: "454387578453",
  appId: "1:454387578453:web:5cf523d7eef964669a86dc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

