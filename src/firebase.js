import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXmCB1uUpH8vLNx6oQlGLxATyLDyYbiUs",
    authDomain: "clone-d9360.firebaseapp.com",
    databaseURL: "https://clone-d9360.firebaseio.com",
    projectId: "clone-d9360",
    storageBucket: "clone-d9360.appspot.com",
    messagingSenderId: "1045485212209",
    appId: "1:1045485212209:web:f5e1c21ba94ef34147fb10",
    measurementId: "G-0454BXEBM5"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };