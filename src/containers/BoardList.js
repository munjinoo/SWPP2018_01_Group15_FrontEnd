import React from 'react'
import { connect } from 'react-redux'
import { BoardList } from 'components'
import { initClubState, deleteBoard } from 'store/actions'

const BoardListContainer = props => <BoardList {...props} />

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
        onDeleteBoard: (boardid) =>{
            dispatch(deleteBoard(boardid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardListContainer)
