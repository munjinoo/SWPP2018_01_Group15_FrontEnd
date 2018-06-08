import React from 'react'
import { shallow } from 'enzyme'
import Signup from '.'

const wrap = (props = {}) => shallow(<Signup {...props} />)

it('handle onSignup when click button', () => {
  const props = {
    onSignup: jest.fn()
  }
  const wrapper = wrap(props)
  wrapper.find('button').simulate('click')
  expect(props.onSignup).toHaveBeenCalled()
})
