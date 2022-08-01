import React from 'react'
import AllNotes from '../components_functional/AllNotes'
import NotesForm  from '../components_functional/NotesForm'

export default function Notes(){
  return(
    <React.Fragment>
      <h1>Notes App</h1>

      <NotesForm />
      <hr />
      <AllNotes />
    </React.Fragment>
  )
}