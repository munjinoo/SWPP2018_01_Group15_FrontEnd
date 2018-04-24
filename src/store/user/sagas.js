import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as types from '../types'
import { url } from '../config'

export function* login(username, password) {
    try {
        const data = yield call(api.post, `${url}login/`, {username: username, password: password}, {credetials: 'include'})
        yield put({
            type: types.SET_USERNAME,
            username: username
        })
        yield put({
            type: types.SET_USERID,
            id: data.id
        })
    } catch (e) {
        console.log(e)
    }
}

export function* logout() {
    try {
        yield call(api.post, `{url}logout/`, {}, {credetials: 'include'})
        yield put({
            type: types.RESET_USERINFO
        })
    } catch (e) {
        console.log(e)
    }
}

export function* watchLoginRequest() {
    while (true) {
        const data = yield take(types.LOGIN)
        yield call(login, data.username, data.password)
    }
}

export function* watchLogoutRequest() {
    while (true) {
        yield take(types.LOGOUT)
        yield call(logout)
    }
}

export default function* () {
    yield fork(watchLoginRequest)
    yield fork(watchLogoutRequest)
}
