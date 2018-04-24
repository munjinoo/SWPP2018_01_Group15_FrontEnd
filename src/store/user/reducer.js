import { initialState } from './selectors'
import * as types from '../types'

const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERID:
            return {
                ...state,
                id: action.id
            }
        case types.SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case types.RESET_USERINFO:
            return initialState
        default:
            return state
    }
}

export default user_reducer
