import React from 'react'
import { shallow } from 'enzyme'
import ArticleDetail from '.'

const wrap = (props = {}) => shallow(<ArticleDetail {...props} />)

it('renders', () => {
  wrap({ onLoad: jest.fn() })
})
