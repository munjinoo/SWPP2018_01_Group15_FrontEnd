import React from 'react'
import { connect } from 'react-redux'
import { ChangeUserStatus } from 'components'
import { changeUserStatus, kickUser } from 'store/actions'

const ChangeUserStatusContainer = props => <ChangeUserStatus {...props} />

const mapStateToProps = (state) => {
    return {
        admin: state.club.admin,
        members: state.club.members,
        waitings: state.club.waitings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeUserStatus: (clubid, userid) => {
            dispatch(changeUserStatus(clubid, userid))
        },
        onKickUser: (clubid, userid) => {
            dispatch(kickUser(clubid, userid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserStatusContainer)
