import { createStore, combineReducers } from 'redux'
import { createWrapper, Context } from 'next-redux-wrapper'
import gameStateReducer from './reducers/gameStateReducer'

export default createWrapper(() => createStore(combineReducers({gameState: gameStateReducer})), {debug: false})
