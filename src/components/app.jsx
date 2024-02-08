import React, { useState } from 'react';
import AddNote from './add_note';
import NotesContainer from './notes_container';

function App(props) {
  // initialize the states
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState({});

  return (
    <div id="content">
      <img alt="" id="sanrio-notes-logo" src="src/media/sanrio-notes-logo.gif" />
      <AddNote notes={notes} setNotes={setNotes} setTitle={setTitle} title={title} />
      <NotesContainer notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
