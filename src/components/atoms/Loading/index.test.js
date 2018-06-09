import React from 'react'
import { shallow } from 'enzyme'
import Loading from '.'

const wrap = (props = {}) => shallow(<Loading {...props} />)

it('renders', () => {
  const wrapper = wrap()
})
