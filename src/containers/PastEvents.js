import React from 'react'
import { connect } from 'react-redux'
import { PastEvents } from 'components'
import { initClubState } from 'store/actions'

const PastEventsContainer = props => <PastEvents {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid) => {
            dispatch(initClubState(clubid))   //??
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastEventsContainer)