import {createStore, applyMiddleware} from 'redux'
import reducer from './../reducer'
import thunk from 'redux-thunk';
import history from './../history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const store = createStore(connectRouter(history)(reducer), applyMiddleware(thunk, routerMiddleware(history)))
window.store = store

export default store