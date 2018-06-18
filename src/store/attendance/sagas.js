import { take, put, fork, call } from 'redux-saga/effects'
import api from 'services/api'
import * as types from '../types'

export function* checkAttendance(clubid, uid) {
    try {
        const data = yield call(api.get, `/event/${clubid}/analysis/`, {params: {user: uid}, credentials: 'include'})
        yield put({
            type: types.SET_ATTENDANCE,
            rate: data.attendence_rate,
            absent: data.absent_count
        })
    } catch (e) {
        console.log(e)
    }
}

export function* watchCheckAttendanceRequest() {
    while(true) {
        const { clubid, uid } = yield take(types.CHECK_ATTENDANCE)
        yield call(checkAttendance, clubid, uid)
    }
}

export default function* () {
    yield fork(watchCheckAttendanceRequest)
}
