import { HYDRATE } from 'next-redux-wrapper'
import * as R from 'ramda'
import {ACTION_TYPES, GAME_STATE_TRANSFORM} from '../actions/gameActions'

interface playerState {
    id: string
    score: number
}

export interface gameState {
    id: string
    players: playerState[]
}

const DEFAULT_GAME_STATE = {
    id: '',
    players: [
        {
            id: 'a',
            score: 0
        },
        {
            id: 'b',
            score: 0
        }
    ]
}

const gameStateReducer = (state: gameState = DEFAULT_GAME_STATE, action: GAME_STATE_TRANSFORM): gameState => {
    switch (action.type) {
        case HYDRATE:
            console.log("hydrate")
            return state
        case ACTION_TYPES.reset:
            return {
                ...state,
                players: R.map((v: playerState): playerState => ({...v, score: action.value}), state.players)
            }
        case ACTION_TYPES.apply:
            return {
                ...state,
                players: R.map((v: playerState): playerState => v.id === action.playerId ? ({...v, score: v.score + action.value}) : v, state.players)
            }
    }
    return {...state}
}

export default gameStateReducer
