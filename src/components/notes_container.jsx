import React from 'react';
import NoteItem from './note_item';

function NotesContainer({ notes, setNotes }) {
  function renderNotesItems() {
    const noteArray = Object.keys(notes);
    const noteItems = noteArray.map((key, index) => {
      return <NoteItem id={key} key={key} notes={notes} setNotes={setNotes} />;
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
