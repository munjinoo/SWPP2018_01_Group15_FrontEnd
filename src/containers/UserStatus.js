import React from 'react'
import { connect } from 'react-redux'
import { UserStatus } from 'components'
import { initUserState } from 'store/actions'

const UserStatusContainer = props => <UserStatus {...props} />

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(initUserState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStatusContainer)
