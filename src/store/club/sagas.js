import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* getClubs(userid) {
    try {
        const data = yield call(api.get, `/users/${userid}/`, {credentials: 'include'});
        
        let admin = data.clubs_as_admin;
        let members = data.clubs_as_member;
        for (var i=0; i < admin.length; i++) {
            yield put({
                type: types.ADD_ADMIN_CLUB,
                club: admin[i]
            })
        }
        for (var i=0; i < members.length; i++) {
            yield put({
                type: types.ADD_MEMBER_CLUB,
                club: members[i]
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export function* postClub(name, scope, category, introduction) {
    try {
        const data = yield call(api.post, `/club/`, {name: name, scope: scope, category: category, introduction: introduction}, {credentials: 'include'});
        yield put({
            type: types.ADD_ADMIN_CLUB,
            club: data.id
        })
        yield put(push(`/club/${data.id}`))
    } catch (e) {
        console.log(e)
    }
}

export function* watchGetClubsRequest() {
    while (true) {
        const userid = yield take(types.GET_CLUBS);
        yield call(getClubs, userid.userid);
    }
}

export function* watchPostClubRequest() {
    while (true) {
        const {name, scope, category, introduction} = yield take(types.POST_CLUB);
        yield call(postClub, name, scope, category, introduction);
    }
}

export default function* () {
    yield fork(watchGetClubsRequest);
    yield fork(watchPostClubRequest);
}
