import React, { useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare, faTrash, faArrowsUpDownLeftRight, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

// set the styles for each character
function getStyles(character) {
  const helloKittyStyles = {
    backgroundColor: '#fffef9',
    color: '#000000',
    accent: '#e01334',
  };

  const kuromiStyles = {
    backgroundColor: '#000000',
    color: '#fffef9',
    accent: '#f3a7c1',
  };

  const myMelodyStyles = {
    backgroundColor: '#f2b5d1',
    color: '#693e2e',
    accent: '#693e2e',
  };

  const pompompurinStyles = {
    backgroundColor: '#523330',
    color: '#ffec2f',
    accent: '#ad7f7a',
  };

  const keroppiStyles = {
    backgroundColor: '#dfe58d',
    color: '#d394aa',
    accent: '#d394aa',
  };

  switch (character) {
    case 1:
      return (helloKittyStyles);
    case 2:
      return (kuromiStyles);
    case 3:
      return (myMelodyStyles);
    case 4:
      return (pompompurinStyles);
    case 5:
      return (keroppiStyles);
    default:
      return (helloKittyStyles);
  }
}

function NoteItem({
  notes, setNotes, id, maxZIndex, setMaxZindex, defaultY,
}) {
  // get the individual note at the specified index
  const note = notes[id];

  // initialize the states
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [img, setImg] = useState(note.img);
  const [position, setPosition] = useState({ x: note.x, y: note.y });
  const [zIndex, setZindex] = useState(note.z);
  const [character, setCharacter] = useState(1);

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
    setMaxZindex(maxZIndex + 1);
    setZindex(maxZIndex);

    // set the new position to the dragged position
    setPosition({ x: data.x, y: data.y });
  };

  // set style variables
  const noteStyle = getStyles(character);

  if (editMode) {
    return (
      <div className="note" style={noteStyle}>
        <div className="note-header">
          <h3><input className="edit-mode-title" placeholder="" value={title} onChange={onTitleChange} /></h3>
          <div className="top-right-icons">
            <FontAwesomeIcon className="save-button" icon={faCircleCheck} size="sm" onClick={onSave} />
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
      defaultPosition={{ x: 0, y: 0 }} // if no position given
      grid={[1, 1]}
      handle=".move-button"
      position={{
        x: position.x, y: position.y,
      }}
      onDrag={onPositionChange}
    >
      <div className="note"
        style={{ zIndex, position: 'relative', ...noteStyle }}
      >
        <div className="note-header">
          <div className="left-container">
            <h3>{note.title}</h3>
          </div>
          <div className="top-right-icons">
            <FontAwesomeIcon className="edit-button" icon={faPenToSquare} size="sm" style={{ color: noteStyle.accent }} onClick={onEdit} />
            <FontAwesomeIcon className="move-button" icon={faArrowsUpDownLeftRight} size="sm" />
          </div>
        </div>
        <ReactMarkdown className="note-img">{note.img || ''}</ReactMarkdown>
        <ReactMarkdown className="note-text">{note.text || ''}</ReactMarkdown>
        <div className="note-footer">
          <div className="sanrio-color-icons">
            <img alt="" id="hello-kitty-emoji" src="src/media/head-hello-kitty.png" onClick={() => setCharacter(1)} />
            <img alt="" src="src/media/head-kuromi.png" onClick={() => setCharacter(2)} />
            <img alt="" id="my-melody-emoji" src="src/media/head-my-melody.png" onClick={() => setCharacter(3)} />
            <img alt="" src="src/media/head-pompompurin.png" onClick={() => setCharacter(4)} />
            <img alt="" src="src/media/head-keroppi.png" onClick={() => setCharacter(5)} />
          </div>
          <FontAwesomeIcon className="delete-button" icon={faTrash} size="sm" style={{ color: noteStyle.accent }} onClick={onDelete} />
        </div>
      </div>
    </Draggable>
  );
}

export default NoteItem;
