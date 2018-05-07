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