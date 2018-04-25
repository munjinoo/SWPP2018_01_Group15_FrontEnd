import React from 'react'
import { connect } from 'react-redux'
import { Logout } from 'components'
import { logout } from 'store/actions'

const LogoutContainer = props => <Logout {...props} />

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)
