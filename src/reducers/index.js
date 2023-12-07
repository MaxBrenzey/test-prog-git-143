import counterReducer from './counter.js'
import loggedReducer from './isLogged.js'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
})

export default allReducer;