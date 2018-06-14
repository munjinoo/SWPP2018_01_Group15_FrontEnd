import React from 'react'
import { connect } from 'react-redux'
import { FutureAttendance } from 'components'
import { initEventState, putFutureAttendee, putFutureAbsentee } from 'store/actions'

const FutureAttendanceContainer = props => <FutureAttendance {...props} />

const mapStateToProps = (state) => {
    return {
        eventState: state.event
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPutFutureAttendee: (eventid) => {
            dispatch(putFutureAttendee(eventid))
        },
        onPutFutureAbsentee: (eventid) => {
            dispatch(putFutureAbsentee(eventid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FutureAttendanceContainer)
