import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* postBoard(name, club) {
    try {
        const data = yield call(api.post, `/board/`, {name: name, club: club}, {credentials: 'include'});
        yield put({
            type: types.ADD_CLUBBOARD,
            board: data.board
        })
    } catch (e) {
        console.log(e)
    }
}

export function* watchPostBoardRequest() {
    while (true) {
        const {name, club} = yield take(types.POST_BOARD);
        yield call(postBoard, name, club);
    }
}

export default function* () {
    yield fork(watchPostBoardRequest);
}
