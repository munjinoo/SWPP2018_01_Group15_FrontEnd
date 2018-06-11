import React from 'react'
import { shallow } from 'enzyme'
import FutureAttendance from '.'

const wrap = (props = {}) => shallow(<FutureAttendance {...props} />)

it('renders', () => {
  wrap({onLoad: jest.fn()})
})
