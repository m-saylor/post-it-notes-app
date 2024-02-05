import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare, faTrash, faArrowsUpDownLeftRight, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

function NoteItem({ notes, setNotes, index }) {
  // get the individual note at the specified index
  const note = notes[index];

  // initialize the states
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  // when edit button is clicked
  const onEdit = useCallback(() => {
    setEditMode(true);
  }, []);

  // when save button is clicked
  const onSave = useCallback(() => {
    const newNotes = [...notes];
    newNotes[index] = { ...note, title, text };
    setNotes(newNotes);
    setEditMode(false);
  }, [note, notes, title, text, index, setNotes]);

  // display the note element changes
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  if (editMode) {
    return (
      <div className="note">
        <div className="note-header">
          <h3><input placeholder="" value={title} onChange={onTitleChange} /></h3>
          <FontAwesomeIcon className="save-button" icon={faCircleCheck} size="sm" style={{ color: '#b4ea90' }} onClick={onSave} />
          <FontAwesomeIcon className="move-button" icon={faArrowsUpDownLeftRight} size="sm" />
        </div>
        <img alt="" className="note-img" src={note.img} />
        <p><input placeholder="" value={text} onChange={onTextChange} /></p>
        <div className="note-footer">
          <FontAwesomeIcon className="delete-button" icon={faTrash} size="sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>{note.title}</h3>
        <FontAwesomeIcon className="edit-button" icon={faPenToSquare} size="sm" style={{ color: '#000000' }} onClick={onEdit} />
        <FontAwesomeIcon className="move-button" icon={faArrowsUpDownLeftRight} size="sm" />
      </div>
      <img alt="" className="note-img" src={note.img} />
      <p>{note.text}</p>
      <div className="note-footer">
        <FontAwesomeIcon className="delete-button" icon={faTrash} size="sm" />
      </div>
    </div>
  );
}

export default NoteItem;
