import * as types from '../types'

const dummy = () => {}

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

export const putArticle = (articleid, title, content, onSuccess = dummy, onErr = dummy) => {
    return {
        type: types.PUT_ARTICLE,
        articleid,
        title,
        content,
        onSuccess,
        onErr
    }
}

export const deleteArticle = (articleid) => {
    return {
        type: types.DELETE_ARTICLE,
        articleid
    }
}

export const postComment = (articleid, title, content) => {
    return {
        type: types.POST_COMMENT,
        articleid,
        title,
        content
    }
}

export const putComment = (commentid, title, content, onSuccess = dummy, onErr = dummy) => {
    return {
        type: types.PUT_COMMENT,
        commentid,
        title,
        content,
        onSuccess,
        onErr
    }
}

export const deleteComment = (commentid) => {
    return {
        type: types.DELETE_COMMENT,
        commentid
    }
}

export const initArticleState = (articleid) => {
    return {
        type: types.INIT_ARTICLE_STATE,
        articleid
    }
}

export const setArticleIsEdit = () =>{
    return {
        type: types.SET_ARTICLE_IS_EDIT
    }
}
