import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as types from '../types'

export function* login(username, password) {
    try {
        const data = yield call(api.post, `/login/`, {username: username, password: password}, {credentials: 'include'})
        yield put({
            type: types.SET_LOGIN
        })
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
        yield call(api.post, `/logout/`, {}, {credentials: 'include'})
        yield put({
            type: types.RESET_USERINFO
        })
    } catch (e) {
        console.log(e)
    }
}

export function* signup(username, password, email, name, college, major, admission_year) {
    try {
        yield call(api.post, `/signup/`, {username: username, password: password, email: email, name: name, college: college, major: major, admission_year: admission_year}, {credentials: 'include'})
    } catch (e) {
        console.log(e)
        alert('회원가입 에러메시지');
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

export function* watchSignupRequest() {
    while (true) {
        const data = yield take(types.SIGNUP)
        yield call(signup, data.username, data.password, data.email, data.name, data.college, data.major, data.admission_year)
    }
}

export default function* () {
    yield fork(watchLoginRequest)
    yield fork(watchLogoutRequest)
    yield fork(watchSignupRequest)
}
