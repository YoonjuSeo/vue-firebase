import firebase from 'firebase'
import firestore from 'firebase/firestore'
  
// Initialize Firebase
var config = {
apiKey: "AIzaSyCJ6woMdHRq3hH_OTHeA5MciOWFXNhZXKc",
authDomain: "ninja-smoothies-681e3.firebaseapp.com",
databaseURL: "https://ninja-smoothies-681e3.firebaseio.com",
projectId: "ninja-smoothies-681e3",
storageBucket: "ninja-smoothies-681e3.appspot.com",
messagingSenderId: "288391384659"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

//export firestore database
export default firebaseApp.firestore()