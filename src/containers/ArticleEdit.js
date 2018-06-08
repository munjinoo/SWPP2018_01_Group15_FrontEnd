import React from 'react'
import { connect } from 'react-redux'
import { ArticleEdit } from 'components'
import { putArticle } from 'store/actions'

const ArticleEditContainer = props => <ArticleEdit {...props} />

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPutArticle: (articleid, title, content) => {
            dispatch(putArticle(articleid, title, content))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditContainer)
