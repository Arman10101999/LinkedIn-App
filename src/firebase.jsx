//Firebase is a comprehensive platform for building web and mobile applications developed by Google. It offers a wide range of cloud-based services and tools that help developers create high-quality apps with ease.
// Realtime Database:
// Firestore:
// Authentication:
// Storage
// Hosting:
// Analytics
// Testing
// Remote Config:

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvfKKt7xUt2MLaeEAxALMCt37q5CDehho",
  authDomain: "linkedin-clone-e779e.firebaseapp.com",
  projectId: "linkedin-clone-e779e",
  storageBucket: "linkedin-clone-e779e.appspot.com",
  messagingSenderId: "632975588795",
  appId: "1:632975588795:web:22058ce99cd92b730f189e",
  measurementId: "G-63FWWKGNT9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// -------this line of code connects everything here---------
//  firebaseConfig refers to the configuration object that contains the necessary credentials and settings for your Firebase project.
//  firebase.initializeApp() method initializes the Firebase app with the provided configuration and returns a Firebase app instance

const db = firebaseApp.firestore();
//is invoking the firestore() method on the firebaseApp instance. This code is typically used to access the Firestore service provided by Firebase.
//Firestore is a NoSQL document database offered by Firebase, which allows you to store, retrieve, and query data for your application.

const auth = firebase.auth();
// It is used to access the Firebase Authentication service

export { db, auth };
