import React from 'react'
import { shallow } from 'enzyme'
import ArticleShow from '.'

const wrap = (props = {}) => shallow(<ArticleShow {...props} />)

it('', () => {
  wrap()
})
