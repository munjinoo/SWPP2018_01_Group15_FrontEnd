import React from 'react'
import { shallow } from 'enzyme'
import CommentList from '.'

const wrap = (props = {}) => shallow(<CommentList {...props} />)

it('renders', () => {
  wrap()
})
