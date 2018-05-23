import { eventState } from './selectors'
import * as types from '../types'

const add_person = (old_list, addme) => {
    let new_list = [...old_list]
    for (var i=0; i < old_list.length; i++) {
        if (new_list[i].id > addme.id) {
            new_list.splice(i, 0, addme)
            return new_list
        }
        if (new_list[i].id === addme.id) {
            return new_list
        }
    }
    new_list.push(addme)
    return new_list
}

const event_reducer = (state=eventState, action) => {
    switch (action.type) {
        case types.SET_EVENT:
          return {
              ...state,
              name: action.name,
              content: action.content,
              date: action.date,
              club: action.club
          }
        case types.ADD_FUTURE_ATTENDEE:
          return {
            ...state,
            future_attendees: add_person(state.future_attendees, action.future_attendee)
          }
        case types.ADD_FUTURE_ABSENTEE:
          return {
            ...state,
            future_absentees: add_person(state.future_absentees, action.future_absentee)
          }
        case types.ADD_PAST_ATTENDEE:
          return {
            ...state,
            past_attendees: add_person(state.past_attendees, action.past_attendee)
        }
        default:
          return state
    }
}

export default event_reducer;