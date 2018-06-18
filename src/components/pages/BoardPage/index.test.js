import React from 'react'
import { shallow } from 'enzyme'
import BoardPage from '.'

it('renders', () => {
  shallow(<BoardPage params={{boardid: 1, clubid: 1}}/>)
})
