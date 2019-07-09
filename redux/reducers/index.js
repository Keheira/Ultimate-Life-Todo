import { combineReducers } from 'redux'
import personal from './personal'
import work from './work'
import business from './business'

export default combineReducers({ personal,work,business })