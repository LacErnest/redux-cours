import { useDispatch, useSelector } from "react-redux"
import { removeNote } from "../actions/actions"


const AllNotes = () => {
  const dispatch = useDispatch()
  //const store = store
  const notes = useSelector((state) => state.notes, shallowEqual);
  console.log("notes", notes)

  const noteItems = notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b> <br />
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