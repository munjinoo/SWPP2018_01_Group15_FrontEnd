import React from 'react'
import { shallow, mount } from 'enzyme'
import ChangeUserStatus from '.'

const wrap = (props = {}) => shallow(<ChangeUserStatus {...props} />)

it('renders', () => {
  wrap({ onChangeUserStatus: jest.fn(), onKickUser: jest.fn(), clubid: 1 })
})
