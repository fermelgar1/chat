import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCrXwZRSqhwmyDtBCre_KYhnzA5C5MMohM",
    authDomain: "chat-a69af.firebaseapp.com",
    projectId: "chat-a69af",
    storageBucket: "chat-a69af.appspot.com",
    messagingSenderId: "431772114370",
    appId: "1:431772114370:web:4bcb962ca4551c429a8a5b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }