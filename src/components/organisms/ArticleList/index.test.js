import React from 'react'
import { shallow } from 'enzyme'
import ArticleList from '.'

const wrap = (props = {}) => shallow(<ArticleList {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
