import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* login(username, password, onErr) {
    try {
        const data = yield call(api.post, `/login/`, {username: username, password: password}, {credentials: 'include'})
        yield put({type: types.SET_LOGIN})
        yield put({
            type: types.SET_USERNAME,
            username: username
        })
        yield put({
            type: types.SET_USERID,
            id: data.id
        })
        yield put({
            type: types.INIT_USER_STATE
        })
    } catch (e) {
        console.log(e)
        yield call(onErr)
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

export function* initUserState() {
    try {
        const data = yield call(api.get, `/me/`, {credentials: 'include'})
        const as_admin = data.clubs_as_admin
        const as_member = data.clubs_as_members

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
        yield put({
            type: types.SET_ADMIN_CLUB,
            club: as_admin
        })
        yield put({
            type: types.SET_MEMBER_CLUB,
            club: as_member
        })
        yield put({
            type: types.SET_WAITING_CLUB,
            club: data.clubs_as_waitings
        })
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

export function* signup(username, password, email, name, college, major, admission_year, onErr) {
    try {
        yield call(api.post, `/signup/`, {username: username, password: password, email: email, name: name, college: college, major: major, admission_year: admission_year}, {credentials: 'include'})
        yield put(push('/'))
    } catch (e) {
        console.log(e)
        const response = yield e.response.json()
        yield call(onErr, response)
    }
}

export function* joinClub(clubid) {
    try {
        yield call(api.post, `/club/${clubid}/join/`, {}, {credentials: 'include'})
        yield call(initUserState)
    } catch (e) {
        console.log(e)
    }
}

export function* cancelJoinClub(clubid) {
    try {
        yield call(api.delete, `/club/${clubid}/join/`, {credentials: 'include'})
        yield call(initUserState)
    } catch (e) {
        console.log(e)
    }
}

export function* watchLoginRequest() {
    while (true) {
        const data = yield take(types.LOGIN)
        yield call(login, data.username, data.password, data.onErr)
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
        yield call(initUserState)
      
    }
}

export function* watchSignupRequest() {
    while (true) {
        const data = yield take(types.SIGNUP)
        yield call(signup, data.username, data.password, data.email, data.name, data.college, data.major, data.admission_year, data.onErr)
    }
}

export function* watchVerifyTokenRequest() {
    while (true) {
        const data = yield take(types.VERIFY_TOKEN)
        yield call(verify_token, data.token)
    }
}

export function* watchJoinClubRequest() {
    while (true) {
        const { clubid } = yield take(types.JOIN_CLUB)
        yield call(joinClub, clubid)
    }
}

export function* watchCancelJoinClubRequest() {
    while (true) {
        const { clubid } = yield take(types.CANCEL_JOIN_CLUB)
        yield call(cancelJoinClub, clubid)
    }
}

export default function* () {
    yield fork(watchLoginRequest)
    yield fork(watchLogoutRequest)
    yield fork(watchInitUserStateRequest)
    yield fork(watchSignupRequest)
    yield fork(watchVerifyTokenRequest)
    yield fork(watchJoinClubRequest)
    yield fork(watchCancelJoinClubRequest)
}
