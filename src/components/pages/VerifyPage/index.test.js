import React from 'react'
import { shallow } from 'enzyme'
import VerifyPage from '.'

it('renders', () => {
  shallow(<VerifyPage params={{token: "random123test321token"}} />)
})
