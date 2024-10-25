import { postReducer } from "./postReducer";
import {applyMiddleware, createStore} from 'redux'
import {thunk} from 'redux-thunk'



export let store = createStore(postReducer, applyMiddleware(thunk))