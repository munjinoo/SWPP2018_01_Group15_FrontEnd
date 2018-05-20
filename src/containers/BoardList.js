import React from 'react'
import { connect } from 'react-redux'
import { BoardList } from 'components'
import { initClubState } from 'store/actions'

const BoardListContainer = props => <BoardList {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(initClubState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardListContainer)
