import React from 'react'
import { connect } from 'react-redux'
import { initClubState, postEvent } from 'store/actions'
import { Events } from 'components'

const EventsContainer = props => <Events {...props} />

const mapStateToProps = (state) => {
    return {
        future_events: state.club.future_events,
        past_events: state.club.past_events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid) => {
            dispatch(initClubState(clubid))
        },
        onPostEvent: (name, content, date, club) => {
            dispatch(postEvent(name, content, date, club))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
