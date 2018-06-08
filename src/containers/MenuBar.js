import React from 'react'
import { connect } from 'react-redux'
import { MenuBar } from 'components'
import { initUserState, login, logout } from 'store/actions'

const MenuBarContainer = props => <MenuBar {...props} />

const mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
        username: state.user.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(initUserState())
        },
        onLogin: (username, password, onErr) => {
            dispatch(login(username, password, onErr))
        },
        onLogout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBarContainer)
