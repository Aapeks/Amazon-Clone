import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmWDxPDfe7JkWgrF_zsdkNvWAMIfhqk1I",
    authDomain: "clone-6d255.firebaseapp.com",
    databaseURL: "https://clone-6d255.firebaseio.com",
    projectId: "clone-6d255",
    storageBucket: "clone-6d255.appspot.com",
    messagingSenderId: "726322493000",
    appId: "1:726322493000:web:26c72680b149302aaa8a7d",
    measurementId: "G-GNN79H6Z48"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };



