import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA_-oANimgsppm1kvzZMFe31DhBoDci7l8",
  authDomain: "project-ae45d.firebaseapp.com",
  projectId: "project-ae45d",
  storageBucket: "project-ae45d.appspot.com",
  messagingSenderId: "500185182410",
  appId: "1:500185182410:web:260d5c34c6cb0d95c84433",
  measurementId: "G-XK418DE2Z2"
};

// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);

export default fire;
// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
export const db = firebase.firestore();
