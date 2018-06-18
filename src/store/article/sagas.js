import { take, put, call, fork, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* postArticle(board, title, content) {
    try {
        const article = yield call(api.post, `/article/`, {title: title, content: content, board_id: board}, {credentials: 'include'});
        const data = yield call(api.get, `/article/${article.id}/`, {credentials: 'include'});
        yield put({
            type: types.ADD_BOARD_ARTICLE,
            article: data
        })
    } catch (e) {
        console.log(e)
    }
}

export function* putArticle(articleid, title, content, onSuccess, onErr) {
    try {
        yield call(api.put, `/article/${articleid}/`, {title: title, content: content}, {credentials: 'include'});        
        yield call(initArticleState, articleid)
        yield call(onSuccess)
    } catch (e) {
        console.log(e)
        yield call(onErr)
    }
}

export function* deleteArticle(articleid) {
    try {
        yield call(api.delete, `/article/${articleid}/`, {credentials: 'include'})
        const getLocation = state => state.routing.locationBeforeTransitions.pathname
        const location = yield select(getLocation)
        const loc = location.split('/')
        let new_loc = ''
        for (var i=0; i<loc.length-1; i++)
            new_loc += '/' + loc[i]
        yield put(push(new_loc))
    } catch (e) {
        console.log(e)
    }
}

export function* postComment(articleid, title, content) {
    try {
        const data = {
            article_id: articleid,
            title: title,
            content: content
        }
        yield call(api.post, `/comment/`, data, {credentials: 'include'})
        yield call(initArticleState, articleid)
    } catch (e) {
        console.log(e)
    }
}

export function* putComment(commentid, title, content, onSuccess, onErr) {
    try {
        const data = {
            title: title,
            content: content
        }
        yield call(api.put, `/comment/${commentid}/`, data, {credentials: 'include'})
        const getArticle = state => state.article
        const articleState = yield select(getArticle)
        yield call(initArticleState, articleState.id)
        yield call(onSuccess)
    } catch (e) {
        console.log(e)
        yield call(onErr)
    }
}

export function* deleteComment(commentid) {
    try {
        yield call(api.delete, `/comment/${commentid}/`, {credentials: 'include'})
        const getArticle = state => state.article
        const articleState = yield select(getArticle)
        yield call(initArticleState, articleState.id)
    } catch (e) {
        console.log(e)
    }
}

export function* initArticleState(articleid) {
    try {
        const data = yield call(api.get, `/article/${articleid}/`, {credentials: 'include'})
        yield put({
            type: types.RESET_ARTICLE_IS_EDIT
        })

        // set ARTICLE info
        yield put({
            type: types.SET_ARTICLE_TITLE,
            title: data.title
        })
        yield put({
            type: types.SET_ARTICLE_ID,
            id: data.id
        })
        yield put({
            type: types.SET_ARTICLE_CONTENT,
            content: data.content
        })
        yield put({
            type: types.SET_ARTICLE_CREATED_AT,
            created_at: data.created_at
        })
        yield put({
            type: types.SET_ARTICLE_UPDATED_AT,
            updated_at: data.updated_at
        })
        yield put({
            type: types.SET_ARTICLE_WRITER,
            writer: data.writer
        })
        yield put({
            type: types.SET_ARTICLE_BOARD,
            board: data.board
        })
        yield put({
            type: types.SET_ARTICLE_COMMENT,
            comments: data.comment
        })
    } catch (e) {
        console.log(e)
    }
}

export function* watchPostArticleRequest() {
    while (true) {
        const { board, title, content } = yield take(types.POST_ARTICLE)
        yield call(postArticle, board, title, content)
    }
}

export function* watchPutArticleRequest() {
    while (true) {
        const { articleid, title, content, onSuccess, onErr } = yield take(types.PUT_ARTICLE)
        yield call(putArticle, articleid, title, content, onSuccess, onErr)
    }
}

export function* watchDeleteArticleRequest() {
    while (true) {
        const { articleid } = yield take(types.DELETE_ARTICLE)
        yield call(deleteArticle, articleid)
    }
}

export function* watchInitArticleStateRequest() {
    while (true) {
        const { articleid } = yield take(types.INIT_ARTICLE_STATE)
        yield call(initArticleState, articleid)
    }
}

export function* watchPostCommentRequest() {
    while (true) {
        const { articleid, title, content } = yield take(types.POST_COMMENT)
        yield call(postComment, articleid, title, content)
    }
}

export function* watchPutCommentRequest() {
    while (true) {
        const { commentid, title, content, onSuccess, onErr } = yield take(types.PUT_COMMENT)
        yield call(putComment, commentid, title, content, onSuccess, onErr)
    }
}

export function* watchDeleteCommentRequest() {
    while (true) {
        const { commentid } = yield take(types.DELETE_COMMENT)
        yield call(deleteComment, commentid)
    }
}

export default function* () {
    yield fork(watchPostArticleRequest);
    yield fork(watchDeleteArticleRequest);
    yield fork(watchInitArticleStateRequest);
    yield fork(watchPutArticleRequest);
    yield fork(watchPostCommentRequest);
    yield fork(watchPutCommentRequest);
    yield fork(watchDeleteCommentRequest);
}

