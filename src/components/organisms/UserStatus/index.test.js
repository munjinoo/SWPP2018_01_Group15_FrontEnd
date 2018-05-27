import React from 'react'
import { shallow } from 'enzyme'
import UserStatus from '.'

const wrap = (props = {}) => shallow(<UserStatus {...props} />)

it('render Load when state has to be loaded', () => {
  const props = {
    userState: {
      needLoading: {
          user: true
      },
      isLogin: false
    }
  }
  const wrapper = wrap(props)
  expect(wrapper.find('Load').exists()).toBe(true)
})

it('render Login when not logined', () => {
  const props = {
    userState: {
      needLoading: {
          user: false
      },
      isLogin: false
    }
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
      isLogin: true
    }
  }
  const wrapper = wrap(props)
  expect(wrapper.find('Logout').exists()).toBe(true)
})
