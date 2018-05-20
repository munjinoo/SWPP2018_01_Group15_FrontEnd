import * as types from '../types'

export const getBoards = (clubid) => {
    return {
        type: types.GET_BOARDS,
        clubid
    }
}

export const postBoard = (club, name) => {
    return {
        type: types.POST_BOARD,
        club,
        name
    }
}

export const initBoardState = () => {
    return {
        type: types.INIT_BOARD_STATE
    }
}

