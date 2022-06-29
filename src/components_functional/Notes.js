import React, { Component } from "react";
import NotesFom from "./components_functional/NotesFom";
import AllNotes from "./components_functional/AllNotes";

const Notes = () => {
  return (
    <React.Fragment>
      <h1>Version React de l'app des notes composant fonctionnel</h1>
      <NotesFom />
      <hr />
      <AllNotes />
    </React.Fragment>
  )
}

export default Notes;