import { SHOW_ALL } from '../actions/actions'

//L'objectif étant de montrer comment combiner plusieurs reducers avec la méthode combineReducers 

function visibilityReducer(visibility = SHOW_ALL, action) {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;

    default:
      return visibility;
  }
}

export default visibilityReducer