import React, { Component } from "react";
import NotesForm from "./NotesForm";
import AllNotes from "./AllNotes";

const Notes = () => {
  return (
    <div>
      <h1>Version React de l'app des notes composant fonctionnel</h1>
      <NotesForm />
      <hr />
      <AllNotes />
    </div>
  )
}

export default Notes;