import React from 'react'
import { connect } from 'react-redux'
import { ClubList } from 'components'

const ClubListContainer = props => <ClubList {...props} />

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubListContainer)