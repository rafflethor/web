import { Map } from 'immutable'

/**
 * Possible types of action
 */
export const actionTypes = {
    REGISTRATION: {
        REQUEST: '@rafflethor/REGISTRATION/REQUEST',
        SUCCESS: '@rafflethor/REGISTRATION/SUCCESS',
        FAILURE: {
            RAFFLE_ID: '@rafflethor/REGISTRATION/FAILURE/RAFFLE_ID',
            EMAIL: '@rafflethor/REGISTRATION/FAILURE/EMAIL'
        }
    }
}

/**
 * Initial reducer state
 */
export const initialState = Map({
    isLoading: false,
    error: null,
    raffle: Map()
})

/**
 */
const registrationReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REGISTRATION.REQUEST:
            return state.set('isLoading', true)

        case actionTypes.REGISTRATION.SUCCESS:
            return state
                .set('isLoading', false)
                .set('events', action.events)

        case actionTypes.REGISTRATION.FAILURE.GENERAL:
            return state
                .set('isLoading', false)
                .set('error', action.error)

        case actionTypes.REGISTRATION.FAILURE.RAFFLE_ID:
            return state
                .set('isLoading', false)
                .set('invalidId', true)
                .set('error', action.error)

        case actionTypes.REGISTRATION.FAILURE.EMAIL:
            return state
                .set('isLoading', false)
                .set('missingEmail', true)
                .set('error', action.error)

        default:
            return state
    }
}

export const actionCreators = {
    registerUser: (credentials) => {
        console.log('====================> sending registration credentials to server')
        return { type: 'UNKNOWN' }
        //return { type: actionTypes.REGISTRATION.REQUEST, credentials }
    },
    registerUserSuccess: (raffleInfo) => {
        return { type: actionTypes.REGISTRATION.SUCCESS, raffleInfo }
    },
    registerBadRaffleId: () => {
        return { type: actionTypes.REGISTRATION.FAILURE.RAFFLE_ID }
    },
    registerMissingEmail: () => {
        return { type: actionTypes.REGISTRATION.FAILURE.EMAIL }
    },
    registerFailure: (error) => {
        return { type: actionTypes.REGISTRATION.FAILURE.GENERAL, error }
    }
}

export const selectors = {
    getEvents: (state) => {
        return state.registration.getIn(['registration'])
    }
}

export default registrationReducers
