import React from 'react'
import { connect } from 'react-redux'
import { Login } from 'components'
import { login } from 'store/actions'

const LoginContainer = props => <Login {...props} />

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
