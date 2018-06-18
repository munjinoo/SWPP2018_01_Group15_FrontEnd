import React from 'react'
import { shallow } from 'enzyme'
import MenuBar from '.'

const wrap = (props = {}) => shallow(<MenuBar {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
