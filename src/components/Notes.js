import React, { Component } from "react";
import NotesFom from "./components/NotesFom";
import AllNotes from "./components/AllNotes";

export default class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Version React de l'app des notes</h1>
        <NotesFom />
        <hr />
        <AllNotes />
      </React.Fragment>
    )
  }
}