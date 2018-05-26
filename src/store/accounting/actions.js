import * as types from '../types'

export const postAccount = (created_at, updated_at, is_income, club, money, date, writer, content) => {
    return {
        type: types.POST_ACCOUNT,
        created_at,
        updated_at, 
        is_income,
        club,
        money,
        date,
        writer,
        content
    }
}

export const getAccounts = (clubid) => {
    return {
        type: types.GET_ACCOUNTS,
        clubid
    }
}

export const initAccountState = () => {
    return {
        type: types.INIT_ACCOUNT_STATE
    }
}