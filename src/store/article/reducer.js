import { articleState } from './selectors'
import * as types from '../types'


const article_reducer = (state=articleState, action) => { 
    switch (action.type) {
        case types.RESET_ARTICLE_IS_EDIT:
            return {
                ...articleState,
                isEdit: false
            }
        case types.SET_ARTICLE_IS_EDIT:
            return {
                ...state,
                isEdit: true
            }
        case types.SET_ARTICLE_TITLE:
            return {
                ...state,
                title: action.title
            }
        case types.SET_ARTICLE_ID:
            return {
                ...state,
                id: action.id
            }
        case types.SET_ARTICLE_CONTENT:
            return {
                ...state,
                content: action.content
            }
        case types.SET_ARTICLE_CREATED_AT:
            return {
                ...state,
                created_at: action.created_at
            }
        case types.SET_ARTICLE_UPDATED_AT:
            return {
                ...state,
                updated_at: action.updated_at
            }
        case types.SET_ARTICLE_WRITER:
            return {
                ...state,
                writer: action.writer
            }
        case types.SET_ARTICLE_BOARD:
            return {
                ...state,
                board: action.board
            }
        case types.SET_ARTICLE_COMMENT:
            return {
                ...state,
                comments: action.comments
            }
        default:
            return state
    }
}

export default article_reducer;

