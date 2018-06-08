import { take, put, call, fork } from 'redux-saga/effects'
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

export function* putArticle(articleid, title, content) {
    try {
        yield call(api.put, `/article/${articleid}/`, {title: title, content: content}, {credentials: 'include'});        
        yield call(initArticleState, articleid)
    } catch (e) {
        console.log(e)
}
}

export function* deleteArticle(articleid) {
    try {
        const article = yield call(api.get, `/article/${articleid}/`, {credentials: 'include'});
        yield call(api.delete, `/article/${articleid}/`, {credentials: 'include'});
        yield put({
            type: types.DELETE_BOARD_ARTICLE,
            article_id: articleid
        })
        yield put(push(`/board/${article.board}`))
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
            writer: data.writer.username
        })
        yield put({
            type: types.SET_ARTICLE_BOARD,
            board: data.board
        })
    } catch (e) {
        console.log(e)
    }
}

export function* watchPostArticleRequest() {
    while (true) {
        const {board, title, content} = yield take(types.POST_ARTICLE);
        yield call(postArticle, board, title, content);
    }
}

export function* watchPutArticleRequest() {
    while (true) {
        const {articleid, title, content} = yield take(types.PUT_ARTICLE);
        yield call(putArticle, articleid, title, content);
    }
}

export function* watchDeleteArticleRequest() {
    while (true) {
        const {articleid} = yield take(types.DELETE_ARTICLE);
        yield call(deleteArticle, articleid);
    }
}

export function* watchInitArticleStateRequest() {
    while (true) {
        const { articleid } = yield take(types.INIT_ARTICLE_STATE)
        yield call(initArticleState, articleid)
    }
}

export default function* () {
    yield fork(watchPostArticleRequest);
    yield fork(watchDeleteArticleRequest);
    yield fork(watchInitArticleStateRequest);
    yield fork(watchPutArticleRequest);
}

