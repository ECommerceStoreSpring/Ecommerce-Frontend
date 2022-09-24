import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCfW0f0Yn3fFr3l4GlgFgN4ve28sJxIvBg",
    authDomain: "middleware-store.firebaseapp.com",
    projectId: "middleware-store",
    storageBucket: "middleware-store.appspot.com",
    messagingSenderId: "144229198279",
    appId: "1:144229198279:web:61a83eab4c40e910ded1e2",
    measurementId: "G-DYJBX3YJ4S"
})

const auth = firebase.auth();

export { auth };