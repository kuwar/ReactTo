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

// var notesRef = firebaseRef.child('notes');
// Get the notes reference
// var newNotesRef = notesRef.push();
// newNotesRef.set({
//   text: "Do new film"
// });

// Get fired on every time new child is added
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNotesRef = notesRef.push({
//   text: "Do new film!"
// });
// //Get the inserted unique id
// console.log(newNotesRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

todosRef.push({
  text: "Walk a dog",
  completed: false,
  createdAt: 123
});

todosRef.push({
  text: "Walk a dog",
  completed: true,
  createdAt: 123,
  completedAt: 456
});
