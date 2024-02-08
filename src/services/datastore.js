import firebase from 'firebase/app';
import 'firebase/compat/database';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://sanrio-post-it-notes-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();

export function createNote(note) {
  database.ref('notes');
}

export function onNotesValueChange(callback) {
  database.ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    // do something with new note state
  });

  // callback() when done
}
