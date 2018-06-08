import React from 'react'
import { connect } from 'react-redux'
import { ArticleDetail } from 'components'
import { initArticleState } from 'store/actions'

const ArticleDetailContainer = props => <ArticleDetail {...props} />

const mapStateToProps = (state) => {
    return {
        articleState: state.article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (articleid) => {
            dispatch(initArticleState(articleid))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailContainer)
