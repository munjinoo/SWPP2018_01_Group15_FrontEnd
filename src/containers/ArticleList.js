import React from 'react'
import { connect } from 'react-redux'
import { ArticleList } from 'components'
import { initBoardState } from 'store/actions'

const ArticleListContainer = props => <ArticleList {...props} />

const mapStateToProps = (state) => {
    return {
        boardState: state.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (boardid) => {
            dispatch(initBoardState(boardid))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)
