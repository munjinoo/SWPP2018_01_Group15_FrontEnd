import { initialState } from './selectors'
import * as types from '../types'

const attendance_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ATTENDANCE:
            return {
                rate: action.rate,
                absent: action.absent
            }
        default:
            return state
    }
}

export default attendance_reducer
