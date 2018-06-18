import React from 'react'
import { shallow } from 'enzyme'
import LoginModal from '.'

const wrap = (props = {}) => shallow(<LoginModal {...props} />)

it('renders', () => {
  wrap()
})
