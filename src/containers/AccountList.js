import React from 'react'
import { connect } from 'react-redux'
import { AccountList } from 'components'
import { initClubState, deleteAccount } from 'store/actions'



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
        },

        onDeleteAccount: (accountid) => {
            dispatch(deleteAccount(accountid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListContainer)