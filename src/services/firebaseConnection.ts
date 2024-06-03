

import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAPz-M0HHzbYI4Zexgm3O9Lagnee7nzh5k",
    authDomain: "reactlinks-6bd35.firebaseapp.com",
    projectId: "reactlinks-6bd35",
    storageBucket: "reactlinks-6bd35.appspot.com",
    messagingSenderId: "676113106501",
    appId: "1:676113106501:web:3366a024f27338ba46c52c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db};