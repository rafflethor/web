import { all } from 'redux-saga/effects'
import registrationSagas from './registration'
import raffleSagas from './raffle'

export default function* rootSaga () {
    yield all([
        ...registrationSagas,
        ...raffleSagas
    ])
}
