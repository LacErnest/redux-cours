import { useDispatch, useSelector } from "react-redux"
import { removeNote } from "../actions/actions"
import store from "../store/store"


const AllNotes = () => {
  const dispatch = useDispatch()
  //const store = store
  const notes = useSelector((store) => store.notes)
  console.log("notes et store", notes, store)

  const noteItems = notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b>
      <button onClick={() => dispatch(removeNote(index))}>Supprimer</button>
      <br />
      <span>{note.content}</span>
    </li>
  ));

  console.log("noteItems, notes", noteItems, notes)

  return (
    <div>
      <h3>Toutes les notes</h3>
      <ul>{noteItems}</ul>
    </div>

  )
}

export default AllNotes;