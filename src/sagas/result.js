import { put, take, call, fork } from 'redux-saga/effects'
import { actionCreators, actionTypes } from '../reducers/result'
import http from '../client/http'

function* watchGetRaffleResult() {
    while (true) {
        try {
            const { raffleId, hash } = yield take(actionTypes.RESULT.REQUEST)

            if (raffleId && hash) {
                const result = yield call(http.result.checkResult, raffleId, hash)

                yield put(actionCreators.getRaffleResultSuccess(result))
            }

        } catch (e) {
            yield put(actionCreators.getRaffleResultFailure(e))
        }
    }
}

export default [
    fork(watchGetRaffleResult)
]
