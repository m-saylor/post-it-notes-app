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

    const id = `id${Object.entries(notes).length}`;

    const newNotes = { ...notes };
    newNotes[id] = newNote;
    setNotes(newNotes);
  }

  return (
    <div className="add-note-bar">
      <input placeholder="Enter note title here..." value={title} onChange={onTitleChange} />
      <button type="submit" onClick={addNoteItem}>Add</button>
    </div>
  );
}

export default AddNote;
