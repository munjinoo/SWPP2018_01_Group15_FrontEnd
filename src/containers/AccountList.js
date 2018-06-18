import React from 'react'
import { connect } from 'react-redux'
import { AccountList } from 'components'
import { getAccountInfo, initClubState, deleteAccount } from 'store/actions'



const AccountListContainer = props => <AccountList {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club,
        uid: state.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (clubid) => {
            dispatch(initClubState(clubid))
        },
        onDeleteAccount: (accountid) => {
            dispatch(deleteAccount(accountid))
        },
        onDetail: (clubid, only, start_from, end_until) => {
            dispatch(getAccountInfo(clubid, only, start_from, end_until))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListContainer)
