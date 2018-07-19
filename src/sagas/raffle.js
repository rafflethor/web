import { put, take, fork } from 'redux-saga/effects'
import { actionCreators } from '../reducers/raffle'
import { sseActionTypes } from '../client/sse'

function* handleMessages() {
    while (true) {
        try {
            const { event } = yield take(sseActionTypes.ON_MESSAGE)
            const { type, data } = JSON.parse(event.data)

            if (type === 'countdown') {
                console.log("===>", data)
                yield put(actionCreators.showCountdown(data))
            } else if (type === 'info') {
                yield put(actionCreators.showInfo(data))
            }
        } catch (e) {

        }
    }
}

export default [
    fork(handleMessages)
]
