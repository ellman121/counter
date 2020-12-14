import { AnyAction } from 'redux'

export enum ACTION_TYPES {
    apply = "APPLY",
    reset = "RESET",
}

export interface GAME_STATE_TRANSFORM {
    type: string,
    value: number,
    playerId?: string
}

export const gameStateTransform = (playerId: string, value: number): AnyAction => ({
    type: ACTION_TYPES.apply,
    playerId,
    value
})

export const gameStateReset = (value: number): AnyAction => ({
    type: ACTION_TYPES.reset,
    value
})
