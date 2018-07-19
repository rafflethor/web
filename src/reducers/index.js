import { combineReducers } from 'redux'
import registrationReducers from './registration'
import raffleReducers from './raffle'
import resultReducers from './result'

export default combineReducers({
    registration: registrationReducers,
    raffle: raffleReducers,
    result: resultReducers
})
