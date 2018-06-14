import React from 'react'
import { connect } from 'react-redux'
import { CommentList } from 'components'
import { postComment, deleteComment, putComment } from 'store/actions'

const CommentListContainer = props => <CommentList {...props} />

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPost: (articleid, title, content) => {
            dispatch(postComment(articleid, title, content))
        },
        onDelete: (commentid) => {
            dispatch(deleteComment(commentid))
        },
        onPut: (commentid, title, content, onSuccess, onErr) => {
            dispatch(putComment(commentid, title, content, onSuccess, onErr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
