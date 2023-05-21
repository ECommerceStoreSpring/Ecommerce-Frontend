import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATCJ4u3V2Re8wO5-Wv4ngolOgl3R8uEwk",
  authDomain: "bookapp-5823c.firebaseapp.com",
  projectId: "bookapp-5823c",
  storageBucket: "bookapp-5823c.appspot.com",
  messagingSenderId: "1022806242926",
  appId: "1:1022806242926:web:899774927bb6ebea40587f",
  measurementId: "G-W4WVMTX6ZT",
});

const auth = firebase.auth();

export { auth };