import React, { Component, useState } from "react";
import { addNote } from "../actions/actions";
import { connect, useDispatch } from "react-redux"


const NotesForm = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  handleChange = (e) => {
    this.state({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventdefault();

    let { title, content } = this.state;
    dispatch(addNote(title, content))

    setTitle('')
    setContent('')
  }

  return (
    <React.Fragment>
      <h3>Ajouter une note</h3>
      <form onsubmit={handleSubmit}>
        Titre: <br />
        <input type="text" name="title" value={title} onchange={handleChange} />
        <br />
        Contenu: <br />
        <textarea type="text" name="content" value={content} onchange={handleChange}></textarea>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </React.Fragment>
  )
}

export default NotesForm