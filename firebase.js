// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbDryqQt1Co4yKGu-9GOgb4v1LSXgKR80",
  authDomain: "fb-clone-b7b5d.firebaseapp.com",
  projectId: "fb-clone-b7b5d",
  storageBucket: "fb-clone-b7b5d.appspot.com",
  messagingSenderId: "491099302291",
  appId: "1:491099302291:web:fc6b9237890d36132c2066",
  measurementId: "G-6XW0VJ5TBQ"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;