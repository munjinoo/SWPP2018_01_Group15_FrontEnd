import React from 'react'
import { shallow } from 'enzyme'
import EventDetailPage from '.'

it('renders', () => {
  shallow(<EventDetailPage params={{eventid: 1, clubid: 1}}/>)
})
