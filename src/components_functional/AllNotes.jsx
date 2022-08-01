import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removeNote } from "../actions/actions";

export default function AllNotes (){

  const notes = useSelector((store) => store.notes)

  const dispatch = useDispatch();

  const notesItems = notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b> <br />
      <button onClick={() => dispatch(removeNote(index))}>Delete</button>
      <br />
      <span>{note.content}</span>
    </li>
  ));

  return(
    <React.Fragment>
      <h3>All Notes</h3>

      <ul>{notesItems}</ul>
    </React.Fragment>
  )
}