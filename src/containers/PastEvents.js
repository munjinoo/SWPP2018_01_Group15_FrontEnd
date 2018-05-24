import React from 'react'
import { connect } from 'react-redux'
import { PastEvents } from 'components'

const PastEventsContainer = props => <PastEvents {...props} />

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(initEventState())   //??
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastEventsContainer)