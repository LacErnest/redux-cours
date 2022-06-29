import { useDispatch, useSelector } from "react-redux"
import { removeNote } from "../actions/actions"
import store from '../store/store'

const AllNotes = () => {
  const dispatch = useDispatch()

  const notes = useSelector((store) => store.notes)

  const noteItems = notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b>
      <button onClick={() => dispatch(removeNote(index))}>Supprimer</button>
      <br />
      <span>{note.content}</span>
    </li>
  ));

  return (
    <div>
      <h3>Toutes les notes</h3>
      <ul>{noteItems}</ul>
    </div>

  )
}

export default AllNotes;