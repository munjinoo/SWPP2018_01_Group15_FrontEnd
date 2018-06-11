import React from 'react'
import { shallow } from 'enzyme'
import BoardListMain from '.'

const wrap = (props = {}) => shallow(<BoardListMain {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
