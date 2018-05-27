import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* getEvents(clubid, time) {
    try {
        // if (time == None) {
        //     const data = yield call(api.get, `/event/?clubid=${clubid}`)
        // }
        // else 
        if (time == 'future') {
            const data = yield call(api.get, `/event/?need=future&clubid=${clubid}`)
            let events = data
            for (var i=0; i < events.length; i++) {
                yield put({
                    type: types.ADD_FUTURE_EVENT,
                    event: events[i]
                })
            }
        }
        else if (time == 'past') {
            const data = yield call(api.get, `/event/?need=past&clubid=${clubid}`)
            let events = data
            for (var i=0; i < events.length; i++) {
                yield put({
                    type: types.ADD_PAST_EVENT,
                    event: events[i]
                })
            }
        }
        // for (var i=0; i < events.length; i++) {
        //     yield put({
        //         type: types.ADD_EVENT,
        //         event: events[i]
        //     })
        // }
    }
    catch (e) {
        console.log(e);
    }
}

export function* postEvent(name, content, date, club) {
    try {
        const data = yield call(api.post, `/event/`, {name: name, content: content, date: date, club: club}, {credentials: 'include'});
        if (data.time == 'future') {
            yield put({
                type: types.ADD_FUTURE_EVENT,
                event: data.event
            })
        }
        else {
            yield put({
                type: types.ADD_PAST_EVENT,
                event: data.event
            })
        }
        yield put(push(`/event/${data.event.id}`))   //이 url로 이동하자
    }
    catch (e) {
        console.log(e)
    }
}

export function* init_event_state(eventid) {
    try {
        const data = yield call(api.get, `/event/${eventid}/`, {credentials: 'include'})
        const future_attendees = data.future_attendees
        const future_absentees = data.future_absentees
        const past_attendees = data.past_attendees
        yield put({
            type: types.SET_EVENT,
            name: data.name,
            content: data.content,
            date: data.date,
            club: data.club
        })
        for (var i=0; i<future_attendees.length; i++) {
            yield put({
                type: types.ADD_FUTURE_ATTENDEE,
                future_attendee: {id: future_attendees[i].id, name: future_attendees[i].name},
            })
        }
        for (var i=0; i<future_absentees.length; i++) {
            yield put({
                type: types.ADD_FUTURE_ABSENTEE,
                future_absentee: {id: future_absentees[i].id, name: future_absentees[i].name},
            })
        }
        for (var i=0; i<past_attendees.length; i++) {
            yield put({
                type: types.ADD_PAST_ATTENDEE,
                past_attendee: {id: past_attendees[i].id, name: past_attendees[i].name},
            })
        }
    }
    catch (e) {
        console.log(e)
    }
}

export function* watchGetEventsRequest() {
    while (true) {
        const {clubid, time}= yield take(types.GET_EVENTS);
        yield call(getEvents, clubid, time)
    }
}

export function* watchPostEventRequest() {
    while (true) {
        const {name, content, date, club} = yield take(types.POST_EVENT);
        yield call(postEvent, name, content, date, club);
    }
}

export function* watchInitEventStateRequest() {
    while (true) {
        const { clubid } = yield take(types.INIT_EVENT_STATE)
        yield call(init_event_state, clubid)
    }
}
export default function* () {
    yield fork(watchPostEventRequest);
    yield fork(watchInitEventStateRequest);
    yield fork(watchGetEventsRequest);
}