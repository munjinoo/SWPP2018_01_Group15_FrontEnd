import { boardState } from './selectors'
import * as types from '../types'


const add_article = (article_list, article) => {
    let new_list = [...article_list]
    for (var i=0; i < new_list.length; i++) {
        if (new_list[i].created_at > article.created_at) {
            new_list.splice(i, 0, article)
            return new_list
        }
        if (new_list[i].id === article.id) {
            return new_list
        }
    }
    new_list.push(article)
    return new_list
}

const delete_article = (article_list, article_id) => {
   let new_list = [...article_list]
   for (var i=0; i < new_list.length; i++) {
       if (new_list[i].id=article_id){
           new_list.splice(i,1)
           return new_list
       }
   }
   return new_list
}
const board_reducer = (state=boardState, action) => { 
    switch (action.type) {
        case types.RESET_BOARDINFO:
            return {
                ...clubState,
                needLoading: true
            }
        case types.SET_BOARD_NEED_LOAD:
            return {
                ...state,
                needLoading: false
            }
        case types.SET_BOARDNAME:
            return {
                ...state,
                name: action.name
            }
        case types.SET_BOARDID:
            return {
                ...state,
                id: action.id
            }
        case types.ADD_BOARDARTICLE:
            return {
                ...state,
                articles: add_article(state.articles, action.article)
            }
        case types.DELETE_BOARDARTICLE:
            return {
                ...state,
                articles: delete_article(state.articles, action.article_id)
            }
        default:
            return state
    }
}

export default board_reducer;
