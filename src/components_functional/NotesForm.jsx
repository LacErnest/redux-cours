import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from '../actions/actions';

export default function NotesForm(){
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.name === 'title'){
      setTitle(e.target.value)
    }

    if (e.target.name === 'content') {
      setContent(e.target.value)
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    dispatch(addNote(title, content));

    setTitle('')
    setContent('')
  };


  return(
    <React.Fragment>
      <h3>Add Note</h3>

      <form onSubmit={handleSubmission}>
        Title: <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <br />
        Content: <br />
        <textarea
          name="content"
          value={content}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    </React.Fragment>
  )
}