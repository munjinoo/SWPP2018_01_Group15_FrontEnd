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

export function* initClubState(clubid) {
    try {
        const data = yield call(api.get, `/club/${clubid}/`, {credentials: 'include'})
        const board_list = data.boards
        const future_event_list = yield call(api.get, `/event/?need=future&clubid=${clubid}`)
        const past_event_list = yield call(api.get, `/event/?need=past&clubid=${clubid}`)
        const accounting_list = data.accounts
        // set user info
        yield put({
            type: types.SET_CLUB_NAME,
            name: data.name
        })
        yield put({
            type: types.SET_CLUB_ID,
            id: data.id
        })
        yield put({
            type: types.SET_CLUB_USER_LIST,
            admin: data.admin,
            members: data.members,
            waitings: data.waitings
        })
        yield put({
            type: types.SET_CLUB_SCOPE,
            scope: data.scope
        })
        yield put({
            type: types.SET_CLUB_CATEGORY,
            category: data.category
        })
        yield put({
            type: types.SET_CLUB_INTRODUCTION,
            introduction: data.introduction
        })
        // add boards
        for (var i=0; i<board_list.length; i++) {
            yield put({
                type: types.ADD_CLUB_BOARD,
                board: {id: board_list[i].id, name: board_list[i].name}
            })
        }
        // add events
        yield put({
            type: types.SET_FUTURE_EVENT,
            event: future_event_list
        })
        yield put({
            type: types.SET_PAST_EVENT,
            event: past_event_list
        })
        for (var i = 0; i<accounting_list.length; i++){
            yield put({
                type: types.ADD_ACCOUNT,
                account: accounting_list[i]
            })
        }    
    } catch (e) {
        console.log(e)
    }
}

export function* changeUserStatus(clubid, userid) {
    try {
        const data = yield call(api.put, `/club/${clubid}/member/${userid}/`, {}, {credentials: 'include'})
        yield put({
            type: types.GET_CLUB_USER_LIST,
            clubid: clubid
        })
    } catch (e) {
        console.log(e)
    }
}

export function* kickUser(clubid, userid) {
    try {
        const data = yield call(api.delete, `/club/${clubid}/member/${userid}/`, {credentials: 'include'})
        yield put({
            type: types.GET_CLUB_USER_LIST,
            clubid
        })
    } catch (e) {
        console.log(e)
    }
}

export function* getClubUserList(clubid) {
    try {
        const data = yield call(api.get, `/club/${clubid}/`, {credentials: 'include'})
        yield put({
            type: types.SET_CLUB_USER_LIST,
            admin: data.admin,
            members: data.members,
            waitings: data.waitings
        })
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
        yield call(initClubState, clubid)
    }
}

export function* watchChangeUserStatus() {
    while (true) {
        const { clubid, userid } = yield take(types.CHANGE_USER_STATUS)
        yield call(changeUserStatus, clubid, userid)
    }
}

export function* watchKickUser() {
    while (true) {
        const { clubid, userid } = yield take(types.KICK_USER)
        yield call(kickUser, clubid, userid)
    }
}

export function* watchGetClubUserList() {
    while (true) {
        const { clubid } = yield take(types.GET_CLUB_USER_LIST)
        yield call(getClubUserList, clubid)
    }
}

export default function* () {
    yield fork(watchGetClubsRequest);
    yield fork(watchPostClubRequest);
    yield fork(watchInitClubStateRequest);
    yield fork(watchChangeUserStatus);
    yield fork(watchKickUser);
    yield fork(watchGetClubUserList);
}
