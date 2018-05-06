import React from 'react'
import { connect } from 'react-redux'
import { ClubList } from 'components'

const ClubListContainer = props => <ClubList {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (clubid) => {
            dispatch(getClubPage(clubid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubListContainer)