import React from 'react'
import { shallow } from 'enzyme'
import ClubManagePage from '.'

it('renders', () => {
  shallow(<ClubManagePage params={{clubid: 1}} />)
})
