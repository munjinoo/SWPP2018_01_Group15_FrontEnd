import React from 'react'
import { shallow } from 'enzyme'
import ClubEventPage from '.'

it('renders', () => {
  shallow(<ClubEventPage params={{clubid: 1}} />)
})
