import * as types from '../types'

export const login = (username, password) => {
    return {
        type: types.LOGIN,
        username: username,
        password: password
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}

export const signup = (username, password, email, name, college, major, admission_year) => {
    return {
        type: types.LOGIN,
        username: username,
        password: password,
        email: email,
        name: name,
        college: college,
        major: major,
        admission_year: admission_year
    }
}
