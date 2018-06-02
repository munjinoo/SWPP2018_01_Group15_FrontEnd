import React from 'react'
import { connect } from 'react-redux'
import { CheckAttendance } from 'components'
import { initClubState, initEventState, postPastAttendees } from 'store/actions'

const CheckAttendanceContainer = props => <CheckAttendance {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club,
        eventState: state.event
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid, eventid) => {
            console.log("clubid in container",clubid)
            dispatch(initClubState(clubid)),
            dispatch(initEventState(eventid))
        },
        onPostPastAttendees: (eventid, past_attendees) => {
            dispatch(postPastAttendees(eventid, past_attendees))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckAttendanceContainer)