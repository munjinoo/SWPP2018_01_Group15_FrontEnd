import React from 'react'
import { shallow } from 'enzyme'
import PastAttendance from '.'

const wrap = (props = {}) => shallow(<PastAttendance {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
