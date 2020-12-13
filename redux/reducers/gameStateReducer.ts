import { platform } from 'os'
import R from 'ramda'
import {ACTION_TYPES, GAME_STATE_TRANSFORM} from '../actions/gameActions'

interface playerState {
    id: string
    score: number
}

interface gameState {
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

export default (state: gameState = DEFAULT_GAME_STATE, action: GAME_STATE_TRANSFORM): gameState => {
    switch (action.type) {
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
