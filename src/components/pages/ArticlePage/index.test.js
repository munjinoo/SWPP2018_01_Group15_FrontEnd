import React from 'react'
import { shallow } from 'enzyme'
import ArticlePage from '.'

it('renders', () => {
  shallow(<ArticlePage params={{articleid: 1}} />)
})
