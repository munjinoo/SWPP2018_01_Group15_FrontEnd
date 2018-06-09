import * as actions from './actions'
import * as types from '../types'

describe('user actions', () => {
    it('should create an action to login', () => {
        const username = 'testuser'
        const password = 'testpass'
        const expectedAction = {
            type: types.LOGIN,
            username: username,
            password: password
        }
        expect(actions.login(username, password)).toEqual(expectedAction)
    })

    it('should create an action to logout', () => {
        const expectedAction = {
            type: types.LOGOUT
        }
        expect(actions.logout()).toEqual(expectedAction)
    })

    it('should create an action to init state user', () => {
        const expectedAction = {
            type: types.INIT_USER_STATE
        }
        expect(actions.initUserState()).toEqual(expectedAction)
    })

    it('should create an action to verify token', () => {
        const token = 'random123token321string'
        const expectedAction = {
            type: types.VERIFY_TOKEN,
            token: token
        }
        expect(actions.verifyToken(token)).toEqual(expectedAction)
    })

    it('should create an action to sign up', () => {
        const data = {
            username: 'testuser',
            password: 'testpass',
            email: 'test@snu.ac.kr',
            name: '테스트',
            college: '공과대학',
            major: '컴퓨터공학부',
            admission_year: 2015
        }
        const expectedAction = {
            type: types.SIGNUP,
            ...data
        }
        expect(actions.signup(data.username, data.password, data.email, data.name, data.college, data.major, data.admission_year)).toEqual(expectedAction)
    })

})
