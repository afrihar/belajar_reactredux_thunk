import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  users:[]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {...state, users : action.users}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store