import React from 'react'
import { connect } from 'react-redux'
import { initClubState, joinClub, cancelJoinClub } from 'store/actions'
import { ClubMain } from 'components'

const ClubMainContainer = props => <ClubMain {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club,
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid) => {
            dispatch(initClubState(clubid))
        },
        onJoin: (clubid) => {
            dispatch(joinClub(clubid))
        },
        onCancel: (clubid) => {
            dispatch(cancelJoinClub(clubid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubMainContainer)
