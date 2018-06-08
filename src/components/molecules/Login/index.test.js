import React from 'react'
import { shallow } from 'enzyme'
import Login from '.'

const wrap = (props = {}) => shallow(<Login {...props} />)

it('handle onLogin when click button', () => {
  const props = {
      onLogin: jest.fn()
  }
  const wrapper = wrap(props)
  wrapper.find('#login-submit').simulate('click')
  expect(props.onLogin).toHaveBeenCalled()
})
