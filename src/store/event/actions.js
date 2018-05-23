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

export const initEventState = () => {
    return {
        type: types.INIT_EVENT_STATE
    }
}