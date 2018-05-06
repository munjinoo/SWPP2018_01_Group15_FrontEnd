import * as types from '../types'

export const getClubs = (userid) => {
    return {
        type: types.GET_CLUBS,
        userid
    }
}

export const getClubPage = (clubid) => {
    return {
        type: types.GET_CLUB_PAGE,
        clubid
    }
}

