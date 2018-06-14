import React from 'react'
import { connect } from 'react-redux'
import { initClubState } from 'store/actions'
import { ClubMain } from 'components'

const ClubMainContainer = props => <ClubMain {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid) => {
            dispatch(initClubState(clubid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubMainContainer)
