import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: "AIzaSyCDrg08TFIGttpluNLUsiqPvwqE7HP0euo",
    authDomain: "react-website-portfolio.firebaseapp.com",
    projectId: "react-website-portfolio",
    storageBucket: "react-website-portfolio.appspot.com",
    messagingSenderId: "628346985515",
    appId: "1:628346985515:web:e7889782b71890f23c5e6e"
});

var db = firebaseApp.firestore();

export { db };