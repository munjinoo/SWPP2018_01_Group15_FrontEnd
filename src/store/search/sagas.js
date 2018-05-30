import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as types from '../types'
import { setSearchResult } from 'store/actions'

export function* search(query) {
    try {
        const data = yield call(api.get, `/club/search/`, {params: {...query}, credentials: 'include'})
        yield put(setSearchResult(data))
    } catch (e) {
        console.log(e)
    }
}

export function* watchSearchRequest() {
    while (true) {
        const { query } = yield take(types.GET_SEARCH_RESULT)
        yield call(search, query)
    }
}

export default function* () {
    yield fork(watchSearchRequest)
}
