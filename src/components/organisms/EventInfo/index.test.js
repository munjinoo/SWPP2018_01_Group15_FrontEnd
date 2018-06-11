import React from 'react'
import { shallow } from 'enzyme'
import EventInfo from '.'

const wrap = (props = {}) => shallow(<EventInfo {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
