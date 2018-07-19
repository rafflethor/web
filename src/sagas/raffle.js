import { put, take, fork } from 'redux-saga/effects'
import { actionCreators, actionTypes } from '../reducers/raffle'
import { sseActionTypes } from '../client/sse'
import { push } from 'react-router-redux'

function* handleMessages() {
    while (true) {
        try {
            const { event } = yield take(sseActionTypes.ON_MESSAGE)
            const { type, data } = JSON.parse(event.data)

            if (type === 'countdown') {
                yield put(actionCreators.showCountdown(data))
            } else if (type === 'info') {
                yield put(actionCreators.showInfo(data))
            } else if (type === 'winner') {
                yield put(actionCreators.showFinished())
            }
        } catch (e) {

        }
    }
}

function* watchShowResult() {
    while (true) {
        try {
            const { raffleId, hash } = yield take(actionTypes.RAFFLE.SHOW_RESULT)
            console.log('===>', raffleId, '-', hash)
            if (raffleId && hash) {
                yield put(push(`/result/${raffleId}/${hash}`))
            }
        } catch (e) {

        }
    }
}

export default [
    fork(handleMessages),
    fork(watchShowResult)
]
