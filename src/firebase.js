// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyBzwZS1xdqPIpDEMLChUP2dQwrVp_SwNr8",
   authDomain: "clone-6f9a2.firebaseapp.com",
   databaseURL: "https://clone-6f9a2.firebaseio.com",
   projectId: "clone-6f9a2",
   storageBucket: "clone-6f9a2.appspot.com",
   messagingSenderId: "882257845073",
   appId: "1:882257845073:web:d5c9bcbf70f27962c8d170",
   measurementId: "G-GPH63KKJ0R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
