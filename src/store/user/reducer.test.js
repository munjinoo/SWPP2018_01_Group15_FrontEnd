import user_reducer from './reducer'
import { initialState } from './selectors'
import * as actions from './actions'
import * as types from '../types'

describe('user reducer', () => {
    it('should return initial state', () => {
        expect(user_reducer(initialState, {})).toEqual(initialState)
    })

    it('should set isLogin true', () => {
        const action = {
            type: types.SET_LOGIN
        }
        expect(user_reducer(initialState, action))
            .toMatchObject({
                isLogin: true
            })
    })

    it('should set user id', () => {
        const action = {
            type: types.SET_USERID,
            id: 1
        }
        expect(user_reducer(initialState, action))
            .toMatchObject({
                id: 1
            })
    })

    it('should set username', () => {
        const username = 'testuser'
        const action = {
            type: types.SET_USERNAME,
            username: username
        }
        expect(user_reducer(initialState, action))
            .toMatchObject({
                username: username
            })
    })

    it('should reset user state', () => {
        const action = {
            type: types.RESET_USERINFO
        }
        const expectedState = {
            needLoading: {
                user: false,
                club: true
            },
            isLogin: false,
            username: '',
            id: null,
            clubs_as_admin: [
            ],
            clubs_as_member: [
            ]
        }
        expect(user_reducer(initialState, action)).toEqual(expectedState)
    })

    it('should set need flags correct', () => {
        const action = {
            type: types.SET_USER_NEED_LOAD,
            flags: {user: true}
        }
        const initState = {
            needLoading: {
                user: false,
                club: true
            },
            isLogin: false,
            username: '',
            id: null,
            clubs_as_admin: [
            ],
            clubs_as_member: [
            ]
        }
        const expectedState = {
            needLoading: {
                user: true,
                club: true
            },
            isLogin: false,
            username: '',
            id: null,
            clubs_as_admin: [
            ],
            clubs_as_member: [
            ]
        }
        expect(user_reducer(initState, action)).not.toContainEqual({user: false, club: true})
        expect(user_reducer(initState, action)).toEqual(expectedState)
    })

    it('should add admin club', () => {
        const action = {
            type: types.ADD_ADMIN_CLUB,
            club: {id: 1, name: 'testclub'}
        }
        expect(user_reducer(initialState, action).clubs_as_admin)
            .toContainEqual({
                id: 1,
                name: 'testclub'
            })
    })

    it('should not add exist admin club', () => {
        const initState = {
            needLoading: {
                user: false,
                club: true
            },
            isLogin: false,
            username: '',
            id: null,
            clubs_as_admin: [
                {id: 1, name: 'testclub'}
            ],
            clubs_as_member: [
            ]
        }
        const action = {
            type: types.ADD_ADMIN_CLUB,
            club: {id: 1, name: 'testclub'}
        }
        expect(user_reducer(initState, action).clubs_as_admin).toHaveLength(1)
    })

    it('should add member club', () => {
        const action = {
            type: types.ADD_MEMBER_CLUB,
            club: {id: 1, name: 'testclub'}
        }
        expect(user_reducer(initialState, action).clubs_as_member)
            .toContainEqual({
                id: 1,
                name: 'testclub'
            })
    })

    it('should not add exist member club', () => {
        const initState = {
            needLoading: {
                user: false,
                club: true
            },
            isLogin: false,
            username: '',
            id: null,
            clubs_as_admin: [
            ],
            clubs_as_member: [
                {id: 1, name: 'testclub'}
            ]
        }
        const action = {
            type: types.ADD_MEMBER_CLUB,
            club: {id: 1, name: 'testclub'}
        }
        expect(user_reducer(initState, action).clubs_as_member).toHaveLength(1)
    })
})
