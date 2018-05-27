import * as actions from './actions'
import * as types from '../types'

describe('user actions', () => {
    it('should create an action to get clubs', () => {
        const userid = 1
        const expectedAction = {
            type: types.GET_CLUBS,
            userid
        }
        expect(actions.getClubs(userid)).toEqual(expectedAction)
    })

    it('should create an action to post club', () => {
        const data = {
            name: 'testclub',
            scope: '중앙동아리',
            category: '봉사',
            introduction: '테스트'
        }
        const expectedAction = {
            type: types.POST_CLUB,
            ...data
        }
        expect(actions.postClub(data.name, data.scope, data.category, data.introduction)).toEqual(expectedAction)
    })

})
