import React from 'react'
import { connect } from 'react-redux'
import { ChangeClubInfo } from 'components'
import { putClub } from 'store/actions'

const ChangeClubInfoContainer = props => <ChangeClubInfo {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPutClub: (clubid, name, scope, category, introduction) => {
            dispatch(putClub(clubid, name, scope, category, introduction))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeClubInfoContainer)
