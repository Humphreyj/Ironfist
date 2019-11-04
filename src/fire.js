import firebase from 'firebase'
import 'firebase/auth';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCp0sS36wXEROM0atpnbPq-YdvHIokEYN4",
    authDomain: "ironfist-tavern.firebaseapp.com",
    databaseURL: "https://ironfist-tavern.firebaseio.com",
    projectId: "ironfist-tavern",
    storageBucket: "ironfist-tavern.appspot.com",
    messagingSenderId: "337410514616",
    appId: "1:337410514616:web:94c0cc4485d47cda5dde4d",
    measurementId: "G-34LV88FTL1"
};
var fire = firebase.initializeApp(config);
export default fire;