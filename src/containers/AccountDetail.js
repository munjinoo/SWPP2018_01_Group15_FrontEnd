import React from 'react'
import { connect } from 'react-redux'
import { AccountDetail } from 'components'
import { initAccountState } from 'store/actions'

const AccountDetailContainer = props => <AccountDetail {...props} />

const mapStateToProps = (state) => {
    return {
        accountState: state.accounting   //??
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (accountid) => {
            dispatch(initAccountState(accountid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailContainer)