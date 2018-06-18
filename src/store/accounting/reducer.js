import { accountState } from './selectors'
import * as types from '../types'

const account_reducer = (state=accountState, action) => {
    switch (action.type) {
        case types.SET_ACCOUNT:
            return {
              ...state,
              id: action.id,
              created_at: action.created_at,
              updated_at: action.updated_at,
              club: action.club,
              is_income: action.is_income,
              money: action.money,
              date: action.date,
              writer: action.writer,
              content: action.content
          }
        default:
          return state
    }
}

export default account_reducer; 