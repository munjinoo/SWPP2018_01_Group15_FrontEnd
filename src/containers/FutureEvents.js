import React from 'react'
import { connect } from 'react-redux'
import { FutureEvents } from 'components'

const FutureEventsContainer = props => <FutureEvents {...props} />

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(initEventState())    //??
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FutureEventsContainer)