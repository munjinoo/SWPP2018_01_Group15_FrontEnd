import React from 'react'
import { connect } from 'react-redux'
import { VerifyToken } from 'components'
import { verifyToken } from 'store/actions'

const VerifyTokenContainer = props => <VerifyToken {...props} />

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onVerify: (token) => {
            dispatch(verifyToken(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyTokenContainer)
