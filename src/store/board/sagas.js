import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* postBoard(club, name) {
    try {
        const board = yield call(api.post, `/board/`, {name: name, club_id: club}, {credentials: 'include'});
        const data = yield call(api.get, `/board/${board.id}/`, {credentials: 'include'});
        yield put({
            type: types.ADD_CLUBBOARD,
            board: data
        })
    } catch (e) {
        console.log(e)
    }
}

export function* deleteBoard(boardid) {
    try {
        yield call(api.delete, `/board/${boardid}/`, {credentials: 'include'});
        yield put({
            type: types.DELETE_CLUBBOARD,
            board_id: boardid
        })
    } catch (e) {
        console.log(e)
    }
}

export function* init_board_state(boardid) {
    try {
        const data = yield call(api.get, `/board/${boardid}/`, {credentials: 'include'})
        const article_list = data.articles
        console.log(data.articles)
        yield put({
            type: types.SET_BOARD_NEED_LOAD
        })

        // set user info
        yield put({
            type: types.SET_BOARDNAME,
            name: data.name
        })
        yield put({
            type: types.SET_BOARDID,
            id: data.id
        })
        // add boards
        for (var i=0; i<article_list.length; i++) {
            yield put({
                type: types.ADD_BOARDARTICLE,
                article: {id: article_list[i].id, title: article_list[i].title, created_at: article_list[i].created_at}
            })
        }
    } catch (e) {
        console.log(e)
    }
}


export function* watchPostBoardRequest() {
    while (true) {
        const {club, name} = yield take(types.POST_BOARD);
        yield call(postBoard, club, name);
    }
}

export function* watchDeleteBoardRequest() {
    while (true) {
        const {boardid} = yield take(types.DELETE_BOARD);
        yield call(deleteBoard, boardid);
    }
}

export function* watchInitBoardStateRequest() {
    while (true) {
        const { boardid } = yield take(types.INIT_BOARD_STATE)
        yield call(init_board_state, boardid)
    }
}

export default function* () {
    yield fork(watchPostBoardRequest);
    yield fork(watchDeleteBoardRequest);
    yield fork(watchInitBoardStateRequest);
}
