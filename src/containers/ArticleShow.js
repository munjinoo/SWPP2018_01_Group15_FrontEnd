import React from 'react'
import { connect } from 'react-redux'
import { ArticleShow } from 'components'
import { deleteArticle } from 'store/actions'

const ArticleShowContainer = props => <ArticleShow {...props} />

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteArticle: (articleid) =>{
            dispatch(deleteArticle(articleid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShowContainer)
