import React from 'react'
import { connect } from 'react-redux'
import { AccountList } from 'components'
import { initClubState } from 'store/actions'
import { Load } from 'components'


const AccountListContainer = props => <AccountList {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid) => {
            dispatch(initClubState(clubid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListContainer)