import * as types from '../types'

export const getClubs = (userid) => {
    return {
        type: types.GET_CLUBS,
        userid
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

export const initClubState = () => {
    return {
        type: types.INIT_CLUB_STATE
    }
}
