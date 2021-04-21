import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBv36CuT4mfERGebkw9IbrurIOAIDyOB6M",
    authDomain: "ascanio-616a4.firebaseapp.com",
    databaseURL: "https://ascanio-616a4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ascanio-616a4",
    storageBucket: "ascanio-616a4.appspot.com",
    messagingSenderId: "112176015701",
    appId: "1:112176015701:web:d1a35480eb077eaddc27dc",
    measurementId: "G-2LZHVW42XK"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
