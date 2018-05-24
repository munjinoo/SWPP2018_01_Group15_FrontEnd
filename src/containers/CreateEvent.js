import React from 'react'
import { connect } from 'react-redux'
import { CreateEvent } from 'components'
import { postEvent } from 'store/actions'

const CreateEventContainer = props => <CreateEvent {...props} />

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostEvent: (name, content, date) => {
            dispatch(postEvent(name, content, date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventContainer)
