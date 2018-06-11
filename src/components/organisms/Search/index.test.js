import React from 'react'
import { shallow } from 'enzyme'
import Search from '.'

const wrap = (props = {}) => shallow(<Search {...props} />)

it('renders', () => {
  const props = {
    onLoad: jest.fn(),
    query: {},
    search_result: []
  }
  const wrapper = wrap(props)
})
