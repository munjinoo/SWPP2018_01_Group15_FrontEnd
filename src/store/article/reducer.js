import { articleState } from './selectors'
import * as types from '../types'


const article_reducer = (state=articleState, action) => { 
    switch (action.type) {
        case types.RESET_ARTICLE_ISEDIT:
            return {
                ...articleState,
                isEdit: false
            }
        case types.SET_ARTICLE_ISEDIT:
            return {
                ...state,
                isEdit: true
            }
        case types.SET_ARTICLETITLE:
            return {
                ...state,
                title: action.title
            }
        case types.SET_ARTICLEID:
            return {
                ...state,
                id: action.id
            }
        case types.SET_ARTICLECONTENT:
            return {
                ...state,
                content: action.content
            }
        case types.SET_ARTICLECREATEDAT:
            return {
                ...state,
                created_at: action.created_at
            }
        case types.SET_ARTICLEUPDATEDAT:
            return {
                ...state,
                updated_at: action.updated_at
            }
        case types.SET_ARTICLEWRITER:
            return {
                ...state,
                writer: action.writer
            }
        case types.SET_ARTICLEBOARD:
            return {
                ...state,
                board: action.board
            }
        default:
            return state
    }
}

export default article_reducer;

