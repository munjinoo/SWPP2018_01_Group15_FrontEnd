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


export const deleteAccount = (accountid) => {

    return {
        type: types.DELETE_ACCOUNT,
        accountid
    }
}

export const initAccountState = (accountid) => {
    return {
        type: types.INIT_ACCOUNT_STATE,
        accountid: accountid
    }
}