import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB_YziRF1U-DMo-fftq47CySX9dEO1Ub6o",
    authDomain: "yoonju-chat.firebaseapp.com",
    databaseURL: "https://yoonju-chat.firebaseio.com",
    projectId: "yoonju-chat",
    storageBucket: "yoonju-chat.appspot.com",
    messagingSenderId: "345869359125"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots : true})

export default firebaseApp.firestore()