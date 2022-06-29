import React, { Component, useState } from "react";
import { addNote } from "../actions/actions";
import { connect, useDispatch } from "react-redux"


const NotesForm = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.target.name === 'title' ? setTitle(e.target.value) : setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventdefault();

    dispatch(addNote(title, content))

    setTitle('')
    setContent('')
  }

  return (
    <div>
      <h3>Ajouter une note</h3>
      <form onSubmit={handleSubmit}>
        Titre: <br />
        <input type="text" name="title" value={title} onChange={handleChange} />
        <br />
        Contenu: <br />
        <textarea type="text" name="content" value={content} onChange={handleChange}></textarea>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default NotesForm