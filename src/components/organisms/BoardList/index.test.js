import React from 'react'
import { shallow } from 'enzyme'
import BoardList from '.'

const wrap = (props = {}) => shallow(<BoardList {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
