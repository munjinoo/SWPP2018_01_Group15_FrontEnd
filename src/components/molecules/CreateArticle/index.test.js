import React from 'react'
import { shallow } from 'enzyme'
import CreateArticle from '.'

const wrap = (props = {}) => shallow(<CreateArticle {...props} />)

it('renders', () => {
  wrap()
})
