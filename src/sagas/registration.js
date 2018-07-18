import { put, call, takeLatest } from 'redux-saga/effects'
import { actionCreators, actionTypes } from '../reducers/registration'
import http from '../client/http'

/**
 *
 * @since 0.1.0
 */
export function* registration() {
    try {
        const registration = yield call(http.registration.register, credentials)
        const raffleId = registration.get('raffleId')
        const hash = registration.get('hash')

        if (raffleId && hash) {
            yield put(actionCreators.registerUserSuccess(registration))
            yield push('')
        } else {
            if (!raffleId) {
                yield put(actionCreators.registerBadRaffleId())
            } else {
                yield put(actionCreators.registerMissingEmail())
            }
        }
    } catch (err) {
        const error = err.code || err
        yield put(actionCreators.registerUserFailure(error))
    }
}

export default [
    takeLatest(actionTypes.REGISTRATION.REQUEST, registration)
]
