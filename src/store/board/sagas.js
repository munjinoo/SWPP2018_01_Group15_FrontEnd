import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* postBoard(club, name) {
    try {
        console.log(club)
        console.log(name)
        const data = yield call(api.post, `/board/`, {name: name, club: club}, {credentials: 'include'});
        yield put({
            type: types.ADD_CLUBBOARD,
            board: data.id
        })
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

export default function* () {
    yield fork(watchPostBoardRequest);
}
