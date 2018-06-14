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

const remove_person = (list, id) => {
    const id_filter = (obj) => {
        if (obj.id === id)
            return false
        else
            return true
    }
    return list.filter(id_filter)
}

const event_reducer = (state=eventState, action) => {
    switch (action.type) {
        case types.SET_EVENT:
          return {
              ...state,
              id: action.id,
              name: action.name,
              content: action.content,
              date: action.date,
              club: action.club,
              future_attendees: action.future_attendees,
              future_absentees: action.future_absentees,
              past_attendees: action.past_attendees
          }
        case types.ADD_FUTURE_ATTENDEE:
          return {
            ...state,
            future_attendees: add_person(state.future_attendees, action.future_attendee),
            future_absentees: remove_person(state.future_absentees, action.future_attendee.id)
          }
        case types.ADD_FUTURE_ABSENTEE:
          return {
            ...state,
            future_absentees: add_person(state.future_absentees, action.future_absentee),
            future_attendees: remove_person(state.future_attendees, action.future_absentee.id)
          }
        case types.SET_PAST_ATTENDEES:
          return {
            ...state,
            past_attendees: action.past_attendees
        }
        default:
          return state
    }
}

export default event_reducer;
