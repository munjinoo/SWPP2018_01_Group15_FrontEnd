import React from 'react'
import { connect } from 'react-redux'
import { EventInfo } from 'components'
import { initEventState } from 'store/actions'

const EventInfoContainer = props => <EventInfo {...props} />

const mapStateToProps = (state) => {
    return {
        eventState: state.event   //??
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (eventid) => {
            dispatch(initEventState(eventid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfoContainer)