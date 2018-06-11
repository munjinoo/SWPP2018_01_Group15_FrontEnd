import React from 'react'
import { shallow } from 'enzyme'
import PastEvents from '.'

const wrap = (props = {}) => shallow(<PastEvents {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
