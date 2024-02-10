import React, { useState } from 'react';
import NoteItem from './NoteItem';

function NotesContainer({ notes, setNotes }) {
  // set a max z-index variable to increment
  const [maxZIndex, setMaxZindex] = useState(0);

  function renderNotesItems() {
    const noteArray = Object.keys(notes);
    const noteItems = noteArray.map((key, index) => {
      return <NoteItem id={key} key={key} maxZIndex={maxZIndex} notes={notes} setMaxZindex={setMaxZindex} setNotes={setNotes} />;
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
