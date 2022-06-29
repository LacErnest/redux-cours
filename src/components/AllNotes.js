import React, { Component } from "react";
import { connect } from "react-redux";
import { removeNote } from "../actions/actions";

class AllNotes extends Component {

  removeNote = (index) => {
    this.props.removeNote(index);
  }

  render() {
    const noteItems = this.props.notes.map((note, index) => (
      <li key={index}>
        <b>{note.title}</b>
        <button onClick={() => this.removeNote(index)}>Supprimer</button>
        <br />
        <span>{note.content}</span>
      </li>
    ));

    return (
      <React.Fragment>
        <h3>Toutes les notes</h3>
        <ul>{noteItems}</ul>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = {
  removeNote: removeNote,
}


export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);