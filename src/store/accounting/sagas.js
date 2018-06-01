import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* getAccounts(club, created_at, updated_at, writer){
    try{
        console.log("getAccounts called")
        const data = yield call(api.get, `/account/?club=${club}`)
        console.log(data)
        let accounts = data
        console.log(accounts.length)
        for (var i = 0 ; i < accounts.length; i++){
            yield put({
                type: types.ADD_ACCOUNT,
                account : accounts[i]
            })
        }
    } catch (e) {
        console.log(e)
    }
}

export function* postAccount(is_income, money, date, content, club) {
    try { 
        const data = yield call(api.post, `/account/`, {is_income : is_income, money: money, date: date, content: content, club:club}, {credentials: 'include'});
        console.log(data)
        console.log("data came")
        yield put({
            type : types.ADD_ACCOUNT,
            account: data.account
        })
    } catch (e) {
        console.log(e)
    }
}

export function* init_account_state(accountid) { 
    try{
        const data = yield call (api.get, `/account/${accountid}/`, {credentials: 'include'})
        yield put({
            type : types.SET_ACCOUNT,
            id: data.id,
            created_at: data.created_at,
            updated_at: data.updated_at,
            club: data.club,
            is_income: data.is_income,
            money: data.money,
            date: data.date,
            writer: data.writer,
            content: data.content
        })

    } catch(e) { 
        console.log(e)
    }
}

export function* watchGetAccountsRequest() {
    while(true) {
        const { club, created_at, updated_at, writer } = yield take (types.GET_ACCOUNTS);
        yield call (getAccounts, club, created_at, updated_at, writer)
    }
}


export function* watchPostAccountRequest() { 
    while(true) { 
        const { is_income, money, date, content, club } = yield take(types.POST_ACCOUNT);
        yield call(postAccount, is_income, money, date, content, club)
    }
}

export function* watchInitAccountStateRequest() {
    while (true) {
        const { accountid } = yield take(types.INIT_ACCOUNT_STATE)
        yield call(init_account_state, accountid)
    }
}

export default function* () {
    yield fork(watchPostAccountRequest);
    yield fork(watchInitAccountStateRequest);
    yield fork(watchGetAccountsRequest);
}