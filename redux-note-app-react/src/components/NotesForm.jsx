import React, { Component } from "react";
import { addNote } from "../actions/actions";
import { connect } from "react-redux"


class NotesForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
    }
  }

  handleChange = (e) => {
    this.state({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventdefault();

    let { title, content } = this.state;
    this.props.addNote(title, content)

    this.setState({ title: '', content: '' })
  }

  render() {
    return (
      <React.Fragment>
        <h3>Ajouter une note</h3>
        <form onsubmit={this.handleSubmit}>
          Titre: <br />
          <input type="text" name="title" value={this.state.title} onchange={this.handleChange} />
          <br />
          Contenu: <br />
          <textarea type="text" name="content" value={this.state.content} onchange={this.handleChange}></textarea>
          <br />
          <button type="submit">Ajouter</button>
        </form>
      </React.Fragment>
    )
  }
}

export default connect(null, { addNote: addNote })(NotesForm)