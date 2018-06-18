import * as types from '../types'

export const login = (username, password, onErr = () => {}) => {
    return {
        type: types.LOGIN,
        username,
        password,
        onErr
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}

export const verifyToken = (token) => {
    return {
        type: types.VERIFY_TOKEN,
        token: token
    }
}

export const initUserState = () => {
    return {
        type: types.INIT_USER_STATE
    }
}

export const signup = (username, password, email, name, college, major, admission_year, onErr = () => {}) => {
    return {
        type: types.SIGNUP,
        username,
        password,
        email,
        name,
        college,
        major,
        admission_year,
        onErr
    }
}

export const joinClub = (clubid) => {
    return {
        type: types.JOIN_CLUB,
        clubid
    }
}

export const cancelJoinClub = (clubid) => {
    return {
        type: types.CANCEL_JOIN_CLUB,
        clubid
    }
}
