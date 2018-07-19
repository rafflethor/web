import { Map } from 'immutable'

/**
 * Possible types of action
 */
export const actionTypes = {
    RESULT: {
        REQUEST: '@rafflethor/RESULT/REQUEST',
        SUCCESS: '@rafflethor/RESULT/SUCCESS',
        FAILURE: '@rafflethor/RESULT/FAILURE'
    }
}

/**
 * Initial reducer state
 */
export const initialState = Map({
    isLoading: false,
    error: null,
    result: Map(),
})

const resultReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RESULT.REQUEST:
            return state
                .set('isLoading', true)

        case actionTypes.RESULT.SUCCESS:
            return state
                .set('isLoading', false)
                .set('result', action.result)

        case actionTypes.RESULT.FAILURE:
            return state
                .set('isLoading', false)
                .set('result', action.error)

        default:
            return state
    }
}

export const actionCreators = {
    getRaffleResultRequest: (raffleId, hash) => {
        return { type: actionTypes.RESULT.REQUEST, raffleId, hash }
    },
    getRaffleResultSuccess: (result) => {
        return { type: actionTypes.RESULT.SUCCESS, result }
    },
    getRaffleResultFailure: (error) => {
        return { type: actionTypes.RESULT.FAILURE, error }
    }
}

export default resultReducers
