import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* login(username, password) {
    try {
        const data = yield call(api.post, `/login/`, {username: username, password: password}, {credentials: 'include'})
        yield put({type: types.SET_USER_NEED_LOAD, flags: {user: false, club: true}})
        yield put({type: types.SET_LOGIN})
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
        yield put({type: types.RESET_USERINFO})
    } catch (e) {
        console.log(e)
    }
}

export function* init_user_state() {
    try {
        const data = yield call(api.get, `/me/`, {credentials: 'include'})
        const as_admin = data.clubs_as_admin
        const as_member = data.clubs_as_members

        yield put({type: types.SET_USER_NEED_LOAD, flags: {user: false, club: false}})
        yield put({type: types.SET_LOGIN})
        // set user info
        yield put({
            type: types.SET_USERNAME,
            username: data.username
        })
        yield put({
            type: types.SET_USERID,
            id: data.id
        })
        // add clubs
        for (var i=0; i<as_admin.length; i++) {
            yield put({
                type: types.ADD_ADMIN_CLUB,
                club: {id: as_admin[i].id, name: as_admin[i].name}
            })
        }
        for (var i=0; i<as_member.length; i++) {
            yield put({
                type: types.ADD_MEMBER_CLUB,
                club: {id: as_member[i].id, name: as_member[i].name}
            })
        }
    } catch (e) {
        yield put({type: types.RESET_USERINFO})
    }
}

export function* verify_token(token) {
    try {
        yield call(api.post, `/verify/`, {token: token}, {credentials: 'include'})
        alert("인증되었습니다.")
        yield put(push('/'))
    } catch (e) {
        alert("잘못된 접근입니다.")
        yield put(push('/'))
    }
}

export function* signup(username, password, email, name, college, major, admission_year) {
    try {
        yield call(api.post, `/signup/`, {username: username, password: password, email: email, name: name, college: college, major: major, admission_year: admission_year}, {credentials: 'include'})
        yield put(push('/'))
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

export function* watchInitUserStateRequest() {
    while (true) {
        yield take(types.INIT_USER_STATE)
        yield call(init_user_state)
      
    }
}

export function* watchSignupRequest() {
    while (true) {
        const data = yield take(types.SIGNUP)
        yield call(signup, data.username, data.password, data.email, data.name, data.college, data.major, data.admission_year)
    }
}

export function* watchVerifyTokenRequest() {
    while (true) {
        const data = yield take(types.VERIFY_TOKEN)
        yield call(verify_token, data.token)
    }
}

export default function* () {
    yield fork(watchLoginRequest)
    yield fork(watchLogoutRequest)
    yield fork(watchInitUserStateRequest)
    yield fork(watchSignupRequest)
    yield fork(watchVerifyTokenRequest)
}