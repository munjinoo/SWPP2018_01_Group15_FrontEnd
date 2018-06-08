import React from 'react'
import { mount } from 'enzyme'
import UserStatus from '.'

const wrap = (props = {}) => mount(<UserStatus {...props} />)

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
  expect(wrapper.find('Login').exists()).toBe(true)
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
  expect(wrapper.find('Logout').exists()).toBe(true)
})
