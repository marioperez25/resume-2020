import { combineReducers } from 'redux'
import counter from './counter'
import resume from './resume'

export default combineReducers({
  counter,
  resume
})