import React from 'react';
import NoteItem from './note_item';

function NotesContainer({ notes, setNotes }) {
  function renderNotesItems() {
    const noteItems = notes.map((note, index) => {
      return <NoteItem index={index} note={note} setNotes={setNotes} />;
    });

    return noteItems;
  }
  return (
    <div>
      {renderNotesItems()}
    </div>
  );
}

export default NotesContainer;
