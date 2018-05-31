import search_reducer from './reducer'
import { initialState } from './selectors'
import * as actions from './actions'
import * as types from '../types'

describe('search reducer', () => {
    it('should return initial state', () => {
        expect(search_reducer(initialState, {})).toEqual(initialState)
    })

    it('should set results', () => {
        const club_list = [
            {id: 1, name: 'test club 1'},
            {id: 2, name: 'test club 2'},
            {id: 3, name: 'test club 3'}
        ]
        const action = actions.setSearchResult(club_list)
        expect(search_reducer(initialState, action)).toHaveLength(3)
    })
})

