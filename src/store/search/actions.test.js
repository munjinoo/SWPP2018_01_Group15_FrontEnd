import * as actions from './actions'
import * as types from '../types'

describe('search actions', () => {
    it('should create an action to search', () => {
        const query = {
            'name': 'test club'
        }
        const expectedAction = {
            type: types.GET_SEARCH_RESULT,
            query: query
        }
        expect(actions.search(query)).toEqual(expectedAction)
    })

    it('should create an action to store search result', () => {
        const club_list = [
            {id: 1, name: 'test club1'},
            {id: 2, name: 'test club2'}
        ]
        const expectedAction = {
            type: types.SET_SEARCH_RESULT,
            club_list, club_list
        }
        expect(actions.setSearchResult(club_list)).toEqual(expectedAction)
    })
})

