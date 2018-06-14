import { initialState } from './selectors'
import * as types from '../types'

const add_club = (club_list, club) => {
    let new_list = [...club_list]
    for (var i=0; i<new_list.length; i++) {
        if (new_list[i].id > club.id) {
            new_list.splice(i, 0, club)
            return new_list
        }
        if (new_list[i].id === club.id) {
            return new_list
        }
    }
    new_list.push(club)
    return new_list
}

const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOGIN:
            return {
                ...state,
                isLogin: true
            }
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
            return {
                ...initialState,
            }
        case types.ADD_ADMIN_CLUB:
            return {
                ...state,
                clubs_as_admin: add_club(state.clubs_as_admin, action.club)
            }
        case types.ADD_MEMBER_CLUB:
            return {
                ...state,
                clubs_as_member: add_club(state.clubs_as_member, action.club)
            }
        case types.SET_WAITING_CLUB:
            return {
                ...state,
                clubs_as_waiting: action.club
            }
        default:
            return state
    }
}

export default user_reducer
