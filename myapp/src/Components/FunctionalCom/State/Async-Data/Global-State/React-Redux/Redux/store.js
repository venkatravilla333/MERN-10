
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './Count/countReducer'
import { cakeReducer } from './Cake/cakeReducer'
import logger from 'redux-logger'

var rootReducer = combineReducers({
  countReducer: countReducer,
  cakeReducer: cakeReducer
})


export var store = createStore(rootReducer, applyMiddleware(logger))
console.log(store)