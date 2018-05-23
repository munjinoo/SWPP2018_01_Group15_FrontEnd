import { clubState } from './selectors'
import * as types from '../types'

const add_event = (old_list, addme) => {
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

const add_board = (board_list, board) => {
    let new_list = [...board_list]
    for (var i=0; i < new_list.length; i++) {
        if (new_list[i].id > board.id) {
            new_list.splice(i, 0, board)
            return new_list
        }
        if (new_list[i].id === board.id) {
            return new_list
        }
    }
    new_list.push(board)
    return new_list
}

const add_member = (member_list, member) => {
    let new_list = [...member_list]
    for (var i=0; i < new_list.length; i++) {
        if (new_list[i].id > member.id) {
            new_list.splice(i, 0, member)
            return new_list
        }
        if (new_list[i].id === member.id) {
            return new_list
        }
    }
    new_list.push(member)
    return new_list
}

const add_waiting = (waiting_list, waiting) => {
    let new_list = [...waiting_list]
    for (var i=0; i < new_list.length; i++) {
        if (new_list[i].id > waiting.id) {
            new_list.splice(i, 0, waiting)
            return new_list
        }
        if (new_list[i].id === waiting.id) {
            return new_list
        }
    }
    new_list.push(waiting)
    return new_list
}

const club_reducer = (state=clubState, action) => {
    switch (action.type) {
        case types.RESET_CLUBINFO:
            return {
                ...clubState,
                needLoading: true
            }
        case types.SET_CLUB_NEED_LOAD:
            return {
                ...state,
                needLoading: false
            }
        case types.SET_CLUBNAME:
            return {
                ...state,
                name: action.name
            }
        case types.SET_CLUBID:
            return {
                ...state,
                id: action.id
            }
        case types.SET_CLUBADMIN:
            return {
                ...state,
                admin: action.admin
            }
        case types.SET_CLUBSCOPE:
            return {
                ...state,
                scope: action.scope
            }
        case types.SET_CLUBCATEGORY:
            return {
                ...state,
                category: action.category
            }
        case types.SET_CLUBINTRODUCTION:
            return {
                ...state,
                introduction: action.introduction
            }
        case types.ADD_CLUBBOARD:
            return {
                ...state,
                boards: add_board(state.boards, action.board)
            }
        case types.ADD_CLUBMEMBER:
            return {
                ...state,
                members: add_member(state.members, action.member)
            }
        case types.ADD_CLUBWAITING:
            return {
                ...state,
                waitings: add_waiting(state.waitings, action.waiting)
            }
        case types.ADD_EVENT:
            return {
                ...state,
                events: add_event(state.events, action.event)
            }
        default:
            return state
    }
}

export default club_reducer;