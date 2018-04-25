import React from 'react'
import { connect } from 'react-redux'
import { UserStatus } from 'components'

const UserStatusContainer = props => <UserStatus {...props} />

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStatusContainer)
