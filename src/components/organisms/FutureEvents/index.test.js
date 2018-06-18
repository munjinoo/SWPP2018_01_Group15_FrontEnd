import React from 'react'
import { shallow } from 'enzyme'
import FutureEvents from '.'

const wrap = (props = {}) => shallow(<FutureEvents {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
