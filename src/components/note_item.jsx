import React, { useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare, faTrash, faArrowsUpDownLeftRight, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

function NoteItem({ notes, setNotes, id }) {
  // get the individual note at the specified index
  const note = notes[id];

  // initialize the states
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [img, setImg] = useState(note.img);
  const [position, setPosition] = useState({ x: note.x, y: note.y });
  const [zIndex, setZindex] = useState(note.z);

  // create a max z-index variable to move most recent note to front
  let maxZIndex = 0;

  // when edit button is clicked
  const onEdit = useCallback(() => {
    setEditMode(true);
  }, []);

  // when save button is clicked
  const onSave = useCallback(() => {
    const newNotes = { ...notes };
    newNotes[id] = {
      ...note, title, img, text,
    };
    setNotes(newNotes);
    setEditMode(false);
  }, [note, notes, title, text, img, id, setNotes]);

  // when delete button is clicked
  const onDelete = useCallback(() => {
    const newNotes = { ...notes };
    delete newNotes[id];
    setNotes(newNotes);
  }, [id, notes, setNotes]);

  // display the note element changes
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onImgChange = (event) => {
    setImg(event.target.value);
  };

  const onPositionChange = (e, data) => {
    // move note to front via z-index
    maxZIndex += 1;
    setZindex(maxZIndex);

    // set the new position to the dragged position
    setPosition({ x: data.x, y: data.y });
  };

  if (editMode) {
    return (
      <div className="note">
        <div className="note-header">
          <h3><input className="edit-mode-title" placeholder="" value={title} onChange={onTitleChange} /></h3>
          <FontAwesomeIcon className="save-button" icon={faCircleCheck} size="sm" style={{ color: '#b4ea90' }} onClick={onSave} />
          <div className="top-right-icons">
            <FontAwesomeIcon className="move-button" icon={faArrowsUpDownLeftRight} size="sm" />
          </div>
        </div>
        <input className="note-img-edit" placeholder="" value={img} onChange={onImgChange} />
        <p><input className="note-text-edit" placeholder="" value={text} onChange={onTextChange} /></p>
        <div className="note-footer">
          <FontAwesomeIcon className="delete-button" icon={faTrash} size="sm" onClick={onDelete} />
        </div>
      </div>
    );
  }

  return (
    <Draggable
      defaultPosition={{ x: 20, y: 20 }} // if no position given
      grid={[1, 1]}
      handle=".move-button"
      position={{
        x: position.x, y: position.y,
      }}
      style={{ zIndex: { zIndex }, position: 'absolute' }}
      onDrag={onPositionChange}
    >
      <div className="note">
        <div className="note-header">
          <h3>{note.title}</h3>
          <FontAwesomeIcon className="edit-button" icon={faPenToSquare} size="sm" style={{ color: '#000000' }} onClick={onEdit} />
          <div className="sanrio-color-icons">
            <img alt="" src="media/head-hello-kitty.png" />
            <img alt="" src="media/head-kuromi.png" />
            <img alt="" src="media/head-my-melody.png" />
            <img alt="" src="media/head-pompompurin.png" />
            <img alt="" src="media/head-keroppi.png" />
            <img alt="" src="media/head-tuxeo-sam.png" />
          </div>
          <div className="top-right-icons">
            <FontAwesomeIcon className="move-button" icon={faArrowsUpDownLeftRight} size="sm" />
          </div>
        </div>
        <ReactMarkdown className="note-img">{note.img || ''}</ReactMarkdown>
        <ReactMarkdown className="note-text">{note.text || ''}</ReactMarkdown>
        <div className="note-footer">
          <FontAwesomeIcon className="delete-button" icon={faTrash} size="sm" onClick={onDelete} />
        </div>
      </div>
    </Draggable>
  );
}

export default NoteItem;
