import React from 'react'
import { shallow } from 'enzyme'
import VerifyToken from '.'

const wrap = (props = {}) => shallow(<VerifyToken {...props} />)

it('call onVerify when rendered', () => {
  const props = {
    token: 'random123test321token',
    onVerify: jest.fn()
  }
  const wrapper = wrap(props)
  expect(props.onVerify).toHaveBeenCalled()
})
