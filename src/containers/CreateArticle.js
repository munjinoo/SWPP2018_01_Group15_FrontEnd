import React from 'react'
import { connect } from 'react-redux'
import { CreateArticle } from 'components'
import { postArticle } from 'store/actions'

const CreateArticleContainer = props => <CreateArticle {...props} />

const mapStateToProps = (state) => {
    return {
        boardState: state.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostArticle: (board, title, content) => {
            dispatch(postArticle(board, title, content))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticleContainer)
