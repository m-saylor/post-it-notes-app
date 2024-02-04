import React from 'react';
import NoteItem from './note_item';

function getKey(index, title) {
  return `${index}-${title}`;
}

function NotesContainer({ notes, setNotes }) {
  console.log(notes);
  function renderNotesItems() {
    const noteItems = notes.map((note, index) => {
      return <NoteItem index={index} key={getKey(index, note.title)} notes={notes} setNotes={setNotes} />;
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
