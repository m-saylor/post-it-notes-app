import React from 'react';

function AddNote({
  title, setTitle, notes, setNotes,
}) {
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
      zIndex: 1,
    };

    const newNotes = notes;
    newNotes.push(newNote);
    setNotes(newNotes);
  }

  return (
    <div className="note">
      <input onChange={onTitleChange} value={title} placeholder="Enter note title here..." />
      <button type="submit" onClick={addNoteItem}>Add</button>
    </div>
  );
}

export default AddNote;
