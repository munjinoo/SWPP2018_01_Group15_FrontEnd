import { clubState } from './selectors'
import * as types from '../types'

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
        case types.ADD_ADMIN_CLUB:
            return {
                admin: add_club(state.admin, action.club),  // action.club 이 숫자인가?!....
                members: state.members
            }
        case types.ADD_MEMBER_CLUB:
            return {
                admin: state.admin,
                members: add_club(state.members, action.club)
            }
        default:
            return state
    }
}

export default club_reducer;
