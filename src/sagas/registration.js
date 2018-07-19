import { put, take, fork, call } from 'redux-saga/effects'
import { actionCreators, actionTypes } from '../reducers/registration'
import http from '../client/http'

/**
 *
 * @since 0.1.0
 */
export function* registration() {
    while (true) {
        try {
            const { credentials } = yield take(actionTypes.REGISTRATION.REQUEST)
            const registration = yield call(http.registration.register, credentials.raffleId, credentials.email)

            const raffleId = registration && registration.get('raffleId')
            const hash = registration && registration.get('hash')

            if (raffleId && hash) {
                yield put(actionCreators.registerUserSuccess(raffleId, hash))
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
}

export default [
    fork(registration)
]
