import React from 'react'
import { shallow } from 'enzyme'
import Attendance from '.'

const wrap = (props = {}) => shallow(<Attendance {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
