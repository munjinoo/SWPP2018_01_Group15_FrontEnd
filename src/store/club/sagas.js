import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as types from '../types'

export function* getClubs(userid) {
    try {
        const data = yield call(api.get, `/users/${userid}/`, {credentials: 'include'});
        // need to add below fields to UserSerializer in BackEnd ?
        let admin = data.clubs_as_admin;
        let members = data.clubs_as_admin;
        for (var i=0; i < admin.length; i++) {
            yield put({
                type: types.ADD_ADMIN_CLUB,
                promise: admin[i]
            })
        }
        for (var i=0; i < members.length; i++) {
            yield put({
                type: types.ADD_MEMBER_CLUB,
                promise: members[i]
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export function* getClubPage(clubid) {
    try {
        const data = yield call(api.get, `/club/${clubid}/`, {credentials: 'include'});
        let admin = data.clubs_as_admin;
        let members = data.clubs_as_admin;
        for (var i=0; i < admin.length; i++) {
            yield put({
                type: types.ADD_ADMIN_CLUB,
                promise: admin[i]
            })
        }
        for (var i=0; i < members.length; i++) {
            yield put({
                type: types.ADD_MEMBER_CLUB,
                promise: members[i]
            })
        }
    } catch (e) {
        console.log(e);
    }
}
// export function* postClub(sinceWhen, tilWhen, user2) {
//     try {
//         const data = yield call(api.post, `${url}promises/`, {sinceWhen:sinceWhen, tilWhen:tilWhen, user2:user2}, {credentials: 'include'});
//         yield put({
//             type: types.ADD_INVITER_PROMISE,
//             promise: data.id
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }

export function* watchGetClubsRequest() {
    while (true) {
        const userid = yield take(types.GET_CLUBS);
        yield call(getClubs, userid.userid);
    }
}

export function* watchGetClubPageRequest() {
    while (true) {
        const clubid = yield take(types.GET_CLUB_PAGE);
        yield call(getClubPage, clubid.clubid);
    }
}
// export function* watchPostPromiseRequest() {
//     while (true) {
//         const {sinceWhen, tilWhen, user2} = yield take(types.POST_PROMISE);
//         yield call(postPromise, sinceWhen, tilWhen, user2);
//     }
// }

export default function* () {
    yield fork(watchGetClubsRequest);
    yield fork(watchGetClubPageRequest);
}
