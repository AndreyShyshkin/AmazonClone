import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAxk1Z7IY_2ae4RYqJCFsEnnixvuwbQLIY",
    authDomain: "clone-24f54.firebaseapp.com",
    projectId: "clone-24f54",
    storageBucket: "clone-24f54.appspot.com",
    messagingSenderId: "445835346780",
    appId: "1:445835346780:web:c2eee31a9d6067e50b3799",
    measurementId: "G-7B8MST74TN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };