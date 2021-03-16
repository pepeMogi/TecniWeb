import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDJ02A2FLtYKoErgquy7s2K6Q9ueJOGuFY",
    authDomain: "ptecni.firebaseapp.com",
    projectId: "ptecni",
    storageBucket: "ptecni.appspot.com",
    messagingSenderId: "560524079695",
    appId: "1:560524079695:web:f653cad49b85a2a07db03a",
    measurementId: "G-NBGWCE7DXD"
  };
 
  
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;