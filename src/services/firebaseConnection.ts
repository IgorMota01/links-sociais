import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCgegjSQ7CZvPT8ZRpEsV6rwOHkovmK1FY",
    authDomain: "react-devlink-574fd.firebaseapp.com",
    projectId: "react-devlink-574fd",
    storageBucket: "react-devlink-574fd.firebasestorage.app",
    messagingSenderId: "794274410459",
    appId: "1:794274410459:web:c6f7d3bd8dded9600cc1fe"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };