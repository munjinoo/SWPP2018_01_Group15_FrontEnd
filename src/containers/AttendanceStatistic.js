import React from 'react'
import { connect } from 'react-redux'
import { checkAttendance } from 'store/actions'
import { AttendanceStatistic } from 'components'

const AttendanceStatisticContainer = props => <AttendanceStatistic {...props} />

const mapStateToProps = (state) => {
    return {
        attendance: state.attendance,
        members: state.club.members
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (clubid, uid) => {
            dispatch(checkAttendance(clubid, uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendanceStatisticContainer)
