import { all } from 'redux-saga/effects'
import registrationSagas from './registration'

export default function* rootSaga () {
    yield all([
        ...registrationSagas
    ])
}
