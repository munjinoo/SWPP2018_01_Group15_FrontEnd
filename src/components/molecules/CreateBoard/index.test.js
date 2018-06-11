import React from 'react'
import { shallow } from 'enzyme'
import CreateBoard from '.'

const wrap = (props = {}) => shallow(<CreateBoard {...props} />)

it('renders', () => {
  wrap()
})
