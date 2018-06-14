import React from 'react'
import { connect } from 'react-redux'
import { ArticleDetail } from 'components'
import { initArticleState, deleteArticle, putArticle } from 'store/actions'

const ArticleDetailContainer = props => <ArticleDetail {...props} />

const mapStateToProps = (state) => {
    return {
        articleState: state.article,
        uid: state.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (articleid) => {
            dispatch(initArticleState(articleid))
        },
        onDelete: (articleid) => {
            dispatch(deleteArticle(articleid))
        },
        onPut: (articleid, title, content, onSuccess, onErr) => {
            dispatch(putArticle(articleid, title, content, onSuccess, onErr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailContainer)
