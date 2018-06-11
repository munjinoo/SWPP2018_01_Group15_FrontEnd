import * as types from '../types'

export const getEvents = (clubid, time) => {
    return {
        type: types.GET_EVENTS,
        clubid,
        time
    }
}

export const postEvent = (name, content, date, club) => {
    return {
        type: types.POST_EVENT,
        name,
        content,
        date,
        club
    }
}

export const putFutureAttendee = (eventid) => {
    return {
        type: types.PUT_FUTURE_ATTENDEE,
        eventid: eventid
    }
}

export const putFutureAbsentee = (eventid) => {
    return {
        type: types.PUT_FUTURE_ABSENTEE,
        eventid: eventid
    }
}

export const postPastAttendees = (eventid, past_attendees) => {
    return {
        type: types.POST_PAST_ATTENDEES,
        eventid: eventid,
        past_attendees: past_attendees
    }
}

export const initEventState = (eventid) => {
    return {
        type: types.INIT_EVENT_STATE,
        eventid: eventid
    }
}