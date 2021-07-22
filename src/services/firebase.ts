import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyClqWfjstOtf1BteErOz3-HfM0VdFIAhEc",
    authDomain: "c-helper-a2326.firebaseapp.com",
    databaseURL: "https://c-helper-a2326-default-rtdb.firebaseio.com",
    projectId: "c-helper-a2326",
    storageBucket: "c-helper-a2326.appspot.com",
    messagingSenderId: "460165635275",
    appId: "1:460165635275:web:d3b49a4d439dd5115f8f4e"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
