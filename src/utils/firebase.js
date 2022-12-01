import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2F_sr3yGT_HFHYxB9rqlU9MPHtZCGdSI",
    authDomain: "pretty-68e6c.firebaseapp.com",
    projectId: "pretty-68e6c",
    storageBucket: "pretty-68e6c.appspot.com",
    messagingSenderId: "711375791470",
    appId: "1:711375791470:web:7567a81c205d59e4b90d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
const db = getFirestore(app)

// Utils
const auth = getAuth(app);




// Exports
export {
    auth
}