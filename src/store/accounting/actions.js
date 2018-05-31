import * as types from '../types'

export const postAccount = (is_income, money, date, content, club) => {
    return {
        type: types.POST_ACCOUNT,
        is_income,
        money,
        date,
        content,
        club
    }
}

export const getAccounts = (club, created_at, updated_at, writer) => {
    return {
        type: types.GET_ACCOUNTS,
        club,
        created_at, 
        updated_at, 
        writer
    }
}

export const initAccountState = (accountid) => {
    return {
        type: types.INIT_ACCOUNT_STATE,
        accountid: accountid
    }
}