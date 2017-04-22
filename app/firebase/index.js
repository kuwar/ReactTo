import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBppmQPkrkVrKOuuwKnv1b6PkF1IO7M-T0",
    authDomain: "react-todo-a5cca.firebaseapp.com",
    databaseURL: "https://react-todo-a5cca.firebaseio.com",
    projectId: "react-todo-a5cca",
    storageBucket: "react-todo-a5cca.appspot.com",
    messagingSenderId: "973460424330"
  };
  
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
