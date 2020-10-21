import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import resume from './resume'

export default combineReducers({
  todos,
  counter,
  resume
})