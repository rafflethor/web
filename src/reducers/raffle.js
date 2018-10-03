import { Map } from 'immutable'
import { sseActionTypes } from '../client/sse'

/**
 * Possible types of action
 */
export const actionTypes = {
    RAFFLE: {
        INFO: {
            REQUEST: '@rafflethor/RAFFLE/INFO/REQUEST',
            SUCCESS: '@rafflethor/RAFFLE/INFO/SUCCESS',
            FAILURE: '@rafflethor/RAFFLE/INFO/FAILURE'
        },
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
    raffle: Map(),
    countdown: '?'
})

/**
 */
const raffleReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RAFFLE.INFO.REQUEST:
            return state
                .set('isLoading', true)

        case actionTypes.RAFFLE.INFO.SUCCESS:
            return state
                .set('isLoading', false)
                .set('raffle', action.raffle)

        case actionTypes.RAFFLE.COUNTDOWN:
            return state
                .set('isLoading', false)
                .set('countdown', action.countdown)

        case actionTypes.RAFFLE.FINISHED:
            return state
                .set('isLoading', false)
                .set('finished', true)

        case actionTypes.RAFFLE.INFO.ERROR:
            return state
                .set('isLoading', false)
                .set('error', action.error)

        default:
            return state
    }
}

export const actionCreators = {
    getRaffleInfoRequest: (raffleId, hash) => {
        return { type: actionTypes.RAFFLE.INFO.REQUEST, raffleId, hash }
    },
    getRaffleInfoSuccess: (raffle) => {
        return { type: actionTypes.RAFFLE.INFO.SUCCESS, raffle }
    },
    getRaffleInfoFailure: (error) => {
        return { type: actionTypes.RAFFLE.INFO.FAILURE, error }
    },
    showFinished: () => {
        return { type: actionTypes.RAFFLE.FINISHED }
    },
    showRaffleResult: (raffleId, hash) => {
        return { type: actionTypes.RAFFLE.SHOW_RESULT, raffleId, hash }
    },
    connectToRaffle: (raffleId, hash) => {
        const url = `${process.env.REACT_APP_API_URL_BASE}/raffles/${raffleId}/${hash}`

        return { type: sseActionTypes.CONNECTION.OPEN.REQUEST, url }
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
