import React from 'react'
import { connect } from 'react-redux'
import { AccountForm } from 'components'
import { postAccount } from 'store/actions'

const AccountFormContainer = props => <AccountForm {...props} />

const mapStateToProps = (state) => {
    return {
       accountState: state.accounting,
       admin_list: state.club.admin,
       uid: state.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onPostAccount: (is_income,  money, date, content, club) => {
            dispatch(postAccount(is_income,  money, date, content, club))
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountFormContainer)
