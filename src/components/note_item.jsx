import React from 'react';

function NoteItem({ note, setNotes }) {
  return (
    <div>
      <div className="note-header">
        <h3>{note.title}</h3>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button">Move</button>
      </div>
      <img alt="" className="note-img" src={note.img} />
      <p>{note.text}</p>
    </div>
  );
}

export default NoteItem;
