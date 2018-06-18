import * as types from '../types'

export const getClubs = (userid) => {
    return {
        type: types.GET_CLUBS,
        userid
    }
}

export const deleteClub = (clubid) => {
    return {
        type: types.DELETE_CLUB,
        clubid
    }
}

export const postClub = (name, scope, category, introduction) => {
    return {
        type: types.POST_CLUB,
        name,
        scope,
        category,
        introduction
    }
}

export const putClub = (clubid, name, scope, category, introduction) => {
    return {
        type: types.PUT_CLUB,
        clubid,
        name,	
        scope,
        category,
        introduction
    }
}

export const initClubState = (clubid) => {
    return {
        type: types.INIT_CLUB_STATE,
        clubid
    }
}

export const changeUserStatus = (clubid, userid) => {
    return {
        type: types.CHANGE_USER_STATUS,
        clubid,
        userid
    }
}

export const kickUser = (clubid, userid) => {
    return {
        type: types.KICK_USER,
        clubid,
        userid
    }
}

export const getAccountInfo = (clubid, only, start_from, end_until) => {
    return {
        type: types.GET_ACCOUNT_INFO,
        clubid,
        only,
        start_from,
        end_until
    }
}
