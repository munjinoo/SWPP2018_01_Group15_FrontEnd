import React from 'react'
import { connect } from 'react-redux'
import { ClubList } from 'components'
import { initUserState } from 'store/actions'

const ClubListContainer = props => <ClubList {...props} />

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

export default connect(mapStateToProps, mapDispatchToProps)(ClubListContainer)
