import React from 'react'
import { shallow } from 'enzyme'
import ClubMainPage from '.'

it('renders', () => {
  shallow(<ClubMainPage params={{clubid: 1}} />)
})
