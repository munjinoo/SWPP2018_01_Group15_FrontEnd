import * as types from '../types'

export const search = (query) => {
    return {
        type: types.GET_SEARCH_RESULT,
        query
    }
}

export const setSearchResult = (club_list) => {
    return {
        type: types.SET_SEARCH_RESULT,
        club_list
    }
}

