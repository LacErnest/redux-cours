import { createStore } from 'redux'
import rootReducer from '../reducers/reducers'

let initialState = {
  notes: [
    { title: 'Premier titre', content: 'Premier contenu' },
    { title: 'Second titre', content: 'Second contenu' },
  ],
  visibility: 'VISIBLE'
}

export default createStore(rootReducer, initialState);