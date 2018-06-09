import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '.'

const wrap = (props = {}) => shallow(<SearchBar {...props} />)

it('renders', () => {
  const wrapper = wrap({})
})
