import { put, take, call, fork } from 'redux-saga/effects'
import { actionCreators, actionTypes } from '../reducers/raffle'
import { sseActionTypes } from '../client/sse'
import { push } from 'react-router-redux'
import http from '../client/http'

function* handleMessages() {
    while (true) {
        try {
            const { event } = yield take(sseActionTypes.ON_MESSAGE)
            const data = JSON.parse(event.data)

            if (data.type === 'countdown') {
                yield put(actionCreators.showCountdown(data.countdown))
            } else if (data.type === 'info') {
                yield put(actionCreators.showInfo(data))
            } else if (data.type === 'winners') {
                yield put(actionCreators.showFinished())
            }
        } catch (e) {

        }
    }
}

function* watchGetRaffleDetails() {
    while (true) {
        try {
            const { raffleId, hash } = yield take(actionTypes.RAFFLE.INFO.REQUEST)

            if (raffleId && hash) {
                const raffle = yield call(http.raffle.detail, raffleId)

                yield put(actionCreators.getRaffleInfoSuccess(raffle))
                yield put(actionCreators.connectToRaffle(raffleId, hash))
            }
        } catch (error) {
            yield put(actionCreators.getRaffleInfoFailure(error))
        }
    }

}

function* watchShowResult() {
    while (true) {
        try {
            const { raffleId, hash } = yield take(actionTypes.RAFFLE.SHOW_RESULT)

            if (raffleId && hash) {
                yield put(push(`/result/${raffleId}/${hash}`))
            }
        } catch (e) {

        }
    }
}

export default [
    fork(handleMessages),
    fork(watchShowResult),
    fork(watchGetRaffleDetails)
]
