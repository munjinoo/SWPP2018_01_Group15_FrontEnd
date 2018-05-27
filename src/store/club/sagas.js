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

export function* init_club_state(clubid) {
    try {
        const data = yield call(api.get, `/club/${clubid}/`, {credentials: 'include'})
        const board_list = data.boards
        const member_list = data.members
        const waiting_list = data.waitings
        yield put({
            type: types.SET_CLUB_NEED_LOAD
        })

        // set user info
        yield put({
            type: types.SET_CLUBNAME,
            name: data.name
        })
        yield put({
            type: types.SET_CLUBID,
            id: data.id
        })
        yield put({
            type: types.SET_CLUBADMIN,
            members: data.admin
        })
        yield put({
            type: types.SET_CLUBSCOPE,
            scope: data.scope
        })
        yield put({
            type: types.SET_CLUBCATEGORY,
            category: data.category
        })
        yield put({
            type: types.SET_CLUBINTRODUCTION,
            introduction: data.introduction
        })
        // add boards
        for (var i=0; i<board_list.length; i++) {
            yield put({
                type: types.ADD_CLUBBOARD,
                board: {id: board_list[i].id, name: board_list[i].name}
            })
        }
        // add members
        for (var i=0; i<member_list.length; i++) {
            yield put({
                type: types.ADD_CLUBMEMBER,
                member: {id: member_list[i].id, name: member_list[i].name}
            })
        }
        // add waitings
        for (var i=0; i<waiting_list.length; i++) {
            yield put({
                type: types.ADD_CLUBWAITING,
                member: {id: waiting_list[i].id, name: waiting_list[i].name}
            })
        }
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

export function* watchInitClubStateRequest() {
    while (true) {
        const { clubid } = yield take(types.INIT_CLUB_STATE)
        yield call(init_club_state, clubid)
    }
}

export default function* () {
    yield fork(watchGetClubsRequest);
    yield fork(watchPostClubRequest);
    yield fork(watchInitClubStateRequest);
}
