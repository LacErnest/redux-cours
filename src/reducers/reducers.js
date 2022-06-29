import notesReducer from "./noteReducer";
import visibilityReducer from "./visiblityReducer";

import { combineReducers } from 'redux'

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer,
})

//Ce dernier fera office de "root Reducer"

export default reducers