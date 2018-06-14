import { clubState } from './selectors'
import * as types from '../types'

const add = (old_list, addme) => {
    let new_list = [...old_list]
    for (var i=0; i < old_list.length; i++) {
        if (new_list[i].id > addme.id) {
            new_list.splice(i, 0, addme)
            return new_list
        }
        if (new_list[i].id === addme.id) {
            return new_list
        }
    }
    new_list.push(addme)
    return new_list
}

const add_club = (clubs, num) => {
    let new_clubs = [];
    let flag = false;
    for (var i=0; i<clubs.length; i++) {
        if (clubs[i] > num) {
            new_clubs.push(num);
            flag = true;
        }
        if (clubs[i] === num) {
            flag = true;
        }
        new_clubs.push(clubs[i]);
    }
    if (!flag) {
        new_clubs.push(num);
    }
    return new_clubs;
}

const delete_board = (board_list, board_id) => {
   let new_list = [...board_list]
   for (var i=0; i < new_list.length; i++) {
       if (new_list[i].id=board_id){
           new_list.splice(i,1)
           return new_list
       }
   }
   return new_list
}

const club_reducer = (state=clubState, action) => {
    switch (action.type) {
        
        case types.SET_CLUB_NAME:
            return {
                ...state,
                name: action.name
            }
        case types.SET_CLUB_ID:
            return {
                ...state,
                id: action.id
            }
        case types.SET_CLUB_ADMIN:
            return {
                ...state,
                admin: action.admin
            }
        case types.SET_CLUB_SCOPE:
            return {
                ...state,
                scope: action.scope
            }
        case types.SET_CLUB_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case types.SET_CLUB_INTRODUCTION:
            return {
                ...state,
                introduction: action.introduction
            }
        case types.SET_FUTURE_EVENT:
            return {
                ...state,
                future_events: action.event
            }
        case types.SET_PAST_EVENT:
            return {
                ...state,
                past_events: action.event
            }
        case types.ADD_CLUB_BOARD:
            return {
                ...state,
                boards: add(state.boards, action.board)
            }
        case types.ADD_CLUB_MEMBER:
            return {
                ...state,
                members: add(state.members, action.member)
            }
        case types.ADD_CLUB_ADMIN:
            return {
                ...state,
                admin: add(state.admin, action.admin)
            }
        case types.ADD_CLUB_WAITING:
            return {
                ...state,
                waitings: add(state.waitings, action.waiting)
            }
        case types.DELETE_CLUB_BOARD:
            return {
                ...state,
                boards: delete_board(state.boards, action.board_id)
            }
        case types.SET_CLUB_USER_LIST:
            return {
                ...state,
                admin: action.admin,
                members: action.members,
                waitings: action.waitings
            }
        default:
            return state
    }
}

export default club_reducer;
