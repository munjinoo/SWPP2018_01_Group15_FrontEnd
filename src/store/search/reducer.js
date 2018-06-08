import { initialState } from './selectors'
import * as types from '../types'

const search_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SEARCH_RESULT:
            return [
                ...action.club_list
            ]
        default:
            return state
    }
}

export default search_reducer
