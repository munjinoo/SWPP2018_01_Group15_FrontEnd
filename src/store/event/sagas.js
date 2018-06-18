import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* getEvents(clubid, time) {
    try {
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

        yield put(push(`/club/${data.event.club}/event/${data.event.id}/`)) 
    }
    catch (e) {
        console.log(e)
    }
}

export function* putFutureAttendee(eventid) {
    try {
        const data = yield call(api.post, `/event/${eventid}/future_attendee/`, {}, {credentials: 'include'})
        yield put({
            type: types.ADD_FUTURE_ATTENDEE,
            future_attendee: {username: data.username, id: data.id, name: data.name}
        })
    }
    catch (e) {
        console.log(e)
    }
}

export function* putFutureAbsentee(eventid) {
    try {
        const data = yield call(api.post, `/event/${eventid}/future_absentee/`, {}, {credentials: 'include'})
        
        yield put({
            type: types.ADD_FUTURE_ABSENTEE,
            future_absentee: {username: data.username, id: data.id, name: data.name}
        })
    }
    catch (e) {
        console.log(e)
    }
}

export function* postPastAttendees(eventid, past_attendees) {
    try {
        const data = yield call(api.post, `/event/${eventid}/past_attendee/`, {past_attendees: past_attendees}, {credentials: 'include'})
        
        yield put({
            type: types.SET_PAST_ATTENDEES,
            past_attendees: past_attendees
        })
    }
    catch (e) {
        console.log(e)
    }
}

export function* init_event_state(eventid) {
    try {
        const data = yield call(api.get, `/event/${eventid}/`, {credentials: 'include'})
        
        yield put({
            type: types.SET_EVENT,
            id: data.id,
            name: data.name,
            content: data.content,
            date: data.date,
            club: data.club,
            future_attendees: data.future_attendees,
            future_absentees: data.future_absentees,
            past_attendees: data.past_attendees
        })
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

export function* watchPutFutureAttendeeRequest() {
    while (true) {
        const { eventid } = yield take(types.PUT_FUTURE_ATTENDEE);
        yield call(putFutureAttendee, eventid);
    }
}

export function* watchPutFutureAbsenteeRequest() {
    while (true) {
        const { eventid } = yield take(types.PUT_FUTURE_ABSENTEE);
        yield call(putFutureAbsentee, eventid);
    }
}

export function* watchPostPastAttendeesRequest() {
    while (true) {
        const { eventid, past_attendees } = yield take(types.POST_PAST_ATTENDEES);
        yield call(postPastAttendees, eventid, past_attendees)
    }
}

export function* watchInitEventStateRequest() {
    while (true) {
        const { eventid } = yield take(types.INIT_EVENT_STATE)
        yield call(init_event_state, eventid)
    }
}
export default function* () {
    yield fork(watchPostPastAttendeesRequest);
    yield fork(watchPutFutureAttendeeRequest);
    yield fork(watchPutFutureAbsenteeRequest);
    yield fork(watchPostEventRequest);
    yield fork(watchInitEventStateRequest);
    yield fork(watchGetEventsRequest);
}
