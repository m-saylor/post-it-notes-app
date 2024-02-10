import React from 'react';
import { createNewNote } from '../services/datastore';

function AddNote({
  title, setTitle, notes, setNotes,
}) {
  // initialize a counter variable state for unique id keys
  // const [id, setId] = useState(0);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // define a function to add the note to the notes
  function addNoteItem() {
    const newNote = {
      title,
      img: '',
      text: '',
      x: 0,
      y: 0,
      z: 1,
      style: 1,
    };

    // previous front-end only syntax, changed when added firebase DB
    // setId(id + 1);

    // const newNotes = { ...notes };
    // newNotes[id] = newNote;
    // setNotes(newNotes);
    createNewNote(newNote);
  }

  return (
    <div className="add-note-bar">
      <img alt="" id="bow-icon" src="src/media/bow-icon.png" />
      <input placeholder="Enter note title here..." value={title} onChange={onTitleChange} />
      <button type="submit" onClick={addNoteItem}>Add</button>
    </div>
  );
}

export default AddNote;
