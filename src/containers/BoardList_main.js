import React from 'react'
import { connect } from 'react-redux'
import { BoardList_main } from 'components'
import { initClubState } from 'store/actions'

const BoardList_mainContainer = props => <BoardList_main {...props} />

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList_mainContainer)
