import { Map } from 'immutable'
import { sseActionTypes } from '../client/sse'

/**
 * Possible types of action
 */
export const actionTypes = {
    RAFFLE: {
        INFO: '@rafflethor/RAFFLE/INFO',
        COUNTDOWN: '@rafflethor/RAFFLE/COUNTDOWN',
        FINISHED: '@rafflethor/RAFFLE/FINISHED',
        SHOW_RESULT: '@rafflethor/RAFFLE/SHOW_RESULT'
    }
}

/**
 * Initial reducer state
 */
export const initialState = Map({
    isLoading: false,
    error: null,
    info: Map(),
    countdown: '-'
})

/**
 */
const raffleReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RAFFLE.INFO:
            return state
                .set('isLoading', true)
                .set('info', action.info)

        case actionTypes.RAFFLE.COUNTDOWN:
            return state
                .set('isLoading', false)
                .set('countdown', action.countdown)

        case actionTypes.RAFFLE.FINISHED:
            return state
                .set('isLoading', false)
                .set('finished', true)

        default:
            return state
    }
}

export const actionCreators = {
    connectToRaffle: (raffleId, hash) => {
        const url = `http://localhost:5050/raffle/${raffleId}/${hash}`

        return { type: sseActionTypes.CONNECTION.OPEN.REQUEST, url }
    },
    showFinished: () => {
        return { type: actionTypes.RAFFLE.FINISHED }
    },
    showRaffleResult: (raffleId, hash) => {
        return { type: actionTypes.RAFFLE.SHOW_RESULT, raffleId, hash }
    },
    disconnectFromRaffle: () => {
        return { type: sseActionTypes.CONNECTION.CLOSE.REQUEST }
    },
    showCountdown: (countdown) => {
        return { type: actionTypes.RAFFLE.COUNTDOWN, countdown }
    },
    showInfo: (info) => {
        return { type: actionTypes.RAFFLE.INFO, info }
    }
}

export default raffleReducers
