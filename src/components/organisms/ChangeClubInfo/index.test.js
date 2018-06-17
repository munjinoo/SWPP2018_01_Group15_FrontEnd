import React from 'react'
import { shallow, mount } from 'enzyme'
import ChangeClubInfo from '.'

const wrap = (props = {}) => shallow(<ChangeClubInfo {...props} />)

it('renders', () => {
  wrap({ onChangeUserStatus: jest.fn(), onKickUser: jest.fn(), clubid: 1 })
})
