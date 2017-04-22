import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBppmQPkrkVrKOuuwKnv1b6PkF1IO7M-T0",
  authDomain: "react-todo-a5cca.firebaseapp.com",
  databaseURL: "https://react-todo-a5cca.firebaseio.com",
  projectId: "react-todo-a5cca",
  storageBucket: "react-todo-a5cca.appspot.com",
  messagingSenderId: "973460424330"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: "Todo App",
    version: 1.0
  },
  isRunning: true,
  user: {
    name: "Saurav",
    age: 25
  }
});

// Set complete wipe data at the current reference and insert new one
// firebaseRef.set({
//   appName: "Todo Application"
// });

// firebaseRef.child('user').set({
//   name: "Mike"
// });

// setting new app name
// firebaseRef.child('app').set({
//   name: "Todo Application"
// });

// Update

// Multipath update
// firebaseRef.update({
//   isRunning: false,
//   'app/name': "Todo Application"
// });

// Child update
// firebaseRef.child('app').update({
//   name: "New Todo Application"
// });

// Challenge
// Multipath update
// firebaseRef.update({
//   'app/name': "Todo Application",
//   'user/name': "Kuwar"
// });

// child update method
// firebaseRef.child('app').update({
//   name: "Todo Application Child Update"
// });
// firebaseRef.child('user').update({
//   name: "Saurav"
// });

// Removing data
// Wipeout all data
// firebaseRef.remove();
// Child technique to remove data
// firebaseRef.child('app').remove();
// firebaseRef.child('app/name').remove();

// When value is set to null than firebase remove that data completely
// update technique to remove data
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// Challenge
// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();

// Fetching data
// fetch all of the data available at the current reference
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log("Unable to fetch value", e);
// });

// fetching child data : app
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got app data', snapshot.key, snapshot.val());
// }, (e) =>{
//   console.log('Unable to fetch app data ', e);
// });

var logData = (snapshot) => {
  console.log('Got value change', snapshot.val().name);
};
// Detectiong change on firebase
// firebaseRef.on('value', logData);
//
// // Turn off event listener
// firebaseRef.off();
// // turn off event listner with argument passed
// firebaseRef.off();
//
// firebaseRef.update({
//   isRunning: false
// });

// Challenge
firebaseRef.child('user').on('value', logData);

firebaseRef.child('user').update({
  name: "Diwash"
});
