import React from 'react'
import { shallow } from 'enzyme'
import Logout from '.'

const wrap = (props = {}) => shallow(<Logout {...props} />)

it('handle onLogout when click button', () => {
  const props = {
    userState: {
      username: 'testuser'
    },
    onLogout: jest.fn()
  }
  const wrapper = wrap(props)
  wrapper.find('button').simulate('click')
  expect(props.onLogout).toHaveBeenCalled()
})
