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

const club_reducer = (state=clubState, action) => {
    switch (action.type) {
        case types.SET_CLUBINFO:
            return {
                ...state,
                name: action.name,
                id: action.id, 
                scope: action.scope,
                category: action.category,
                introduction: action.introduction,
            }
        
        case types.ADD_CLUBBOARD:
            return {
                ...state,
                boards: add(state.boards, action.board)
            }
        case types.ADD_CLUBADMIN:
            return {
                ...state,
                admin: add(state.admin, action.admin)
            }
        case types.ADD_CLUBMEMBER:
            return {
                ...state,
                members: add(state.members, action.member)
            }
        case types.ADD_CLUBWAITING:
            return {
                ...state,
                waitings: add(state.waitings, action.waiting)
            }
        case types.ADD_CLUBBOARD:
            return {
                ...state,
                boards: add_board(state.boards, action.board)
            }
        case types.ADD_FUTURE_EVENT:
            return {
                ...state,
                future_events: add(state.future_events, action.event)
            }
        case types.ADD_PAST_EVENT:
            return {
                ...state,
                past_events: add(state.past_events, action.event)
            }
        // case types.ADD_EVENT:
        //     return {
        //         ...state,
        //         events: add_event(state.events, action.event)
        //     }
        default:
            return state
    }
}

export default club_reducer;