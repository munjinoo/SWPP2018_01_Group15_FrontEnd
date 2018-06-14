import React from 'react'
import { connect } from 'react-redux'
import { PastAttendance } from 'components'

const PastAttendanceContainer = props => <PastAttendance {...props} />

const mapStateToProps = (state) => {
    return {
        eventState: state.event,
        clubState: state.club,
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastAttendanceContainer)
