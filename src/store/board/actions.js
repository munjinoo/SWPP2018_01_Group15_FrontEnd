import * as types from '../types'

export const getBoards = (boardid) => {
    return {
        type: types.GET_BOARDS,
        boardid
    }
}

export const postBoard = (club, name) => {
    return {
        type: types.POST_BOARD,
        club,
        name
    }
}

export const deleteBoard = (boardid) => {
    return {
        type: types.DELETE_BOARD,
        boardid
    }
}

export const initBoardState = (boardid) => {
    return {
        type: types.INIT_BOARD_STATE,
        boardid
    }
}
