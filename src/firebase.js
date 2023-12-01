import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqkfA-W4FCmdy2u0o81yxnQM898oHfuD4",
    authDomain: "jiitconnect-7394c.firebaseapp.com",
    projectId: "jiitconnect-7394c",
    storageBucket: "jiitconnect-7394c.appspot.com",
    messagingSenderId: "593613703732",
    appId: "1:593613703732:web:f697b76709d28af0591861"
  };
  
  
const app= initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);
const storage= getStorage(app);

export {app, auth, db, storage};