import React from 'react'
import { connect } from 'react-redux'
import { FutureAttendance } from 'components'
import { initEventState, putFutureAttendee } from 'store/actions'

const FutureAttendanceContainer = props => <FutureAttendance {...props} />

const mapStateToProps = (state) => {
    return {
        eventState: state.event   //??
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (eventid) => {
            dispatch(initEventState(eventid))
        },
        onPutFutureAttendee: (eventid) => {
            dispatch(putFutureAttendee(eventid))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FutureAttendanceContainer)