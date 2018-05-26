import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as types from '../types'

export function* getAccounts(clubid, time){
    try{
        const data = yield call(api.get, `/account/?clubid=${clubid}`)
        let accounts = data
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

export function* postAccount(name, club) {
    try { 
        const date = yield call(api.post, `/account/`, {created_at : created_at, updated_at: updated_at, is_income : is_income, money: money, writer: writer, date: date, content: content});
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
        const data = yield call (api.get, '/account/`${accountid}/', {credentials: 'include'})
        yield put({
            type : types.SET_ACCOUNT,
            created_at: data.created_at,
            updated_at: updated_at,
            is_income: is_income,
            money: money,
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
        const { clubid } = yield take (types.GET_ACCOUNTS);
        yield call (getAccounts, clubid)
    }
}


export function* watchPostAccountRequest() { 
    while(true) { 
        const { created_at, updated_at, is_income, money, date, writer, content } = yield take(types.POST_ACCOUNT);
        yield call(postAccount, created_at, updated_at, is_income, money, date, writer, content)
    }
}

export function* watchInitEventStateRequest() {
    while (true) {
        const { clubid } = yield take(types.INIT_ACCOUNT_STATE)
        yield call(init_account_state, clubid)
    }
}

export default function* () {
    yield fork(watchPostAccountRequest);
    yield fork(watchInitAccountStateRequest);
    yield fork(watchGetAccountsRequest);
}