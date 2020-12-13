import action from 'redux'

export const enum ACTION_TYPES {
    apply = "APPLY",
    reset = "RESET",
}

export interface GAME_STATE_TRANSFORM {
    type: string,
    value: number,
    playerId?: string
}

export const gameStateTransform = (playerId: string, value: number) => ({
    type: ACTION_TYPES.apply,
    playerId,
    value
})

export const gameStateReset = (value: number) => ({
    type: ACTION_TYPES.reset,
    value
})
