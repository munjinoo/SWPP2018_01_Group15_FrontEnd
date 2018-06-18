import React from 'react'
import { shallow } from 'enzyme'
import UserStatus from '.'

const wrap = (props = {}) => shallow(<UserStatus {...props} />)

it('render Login when not logined', () => {
  const props = {
    userState: {
      needLoading: {
          user: false
      },
      isLogin: false
    },
    onLoad: jest.fn(),
    onLogin: jest.fn(),
    onLogout: jest.fn()
  }
  const wrapper = wrap(props)
})

it('render Logout when logined', () => {
  const props = {
    userState: {
      needLoading: {
          user: false
      },
      isLogin: true,
      username: "testuser"
    },
    onLoad: jest.fn(),
    onLogin: jest.fn(),
    onLogout: jest.fn()
  }
  const wrapper = wrap(props)
})
