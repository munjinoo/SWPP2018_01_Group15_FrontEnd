import React from 'react'
import { connect } from 'react-redux'
import { BoardListMain } from 'components'
import { initClubState } from 'store/actions'

const BoardListMainContainer = props => <BoardListMain {...props} />

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

export default connect(mapStateToProps, mapDispatchToProps)(BoardListMainContainer)
