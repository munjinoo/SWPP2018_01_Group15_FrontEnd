import * as types from '../types'

export const getArticles = (articleid) => {
    return {
        type: types.GET_ARTICLES,
        articleid
    }
}

export const postArticle = (board, title, content) => {
    return {
        type: types.POST_ARTICLE,
        board,
        title,
        content
    }
}

export const deleteArticle = (articleid) => {
    return {
        type: types.DELETE_ARTICLE,
        articleid
    }
}

export const initArticleState = (articleid) => {
    return {
        type: types.INIT_ARTICLE_STATE,
        articleid
    }
}

