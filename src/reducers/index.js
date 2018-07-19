import { combineReducers } from 'redux'
import registrationReducers from './registration'
import raffleReducers from './raffle'

export default combineReducers({
    registration: registrationReducers,
    raffle: raffleReducers
})
