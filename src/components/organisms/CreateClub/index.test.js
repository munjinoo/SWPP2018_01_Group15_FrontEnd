import React from 'react'
import { shallow } from 'enzyme'
import CreateClub from '.'

const wrap = (props = {}) => shallow(<CreateClub {...props} />)

it('handle onPostClub when click sumbit button', () => {
  const props = {
      clubState: {},
      onPostClub: jest.fn()
  }
  const wrapper = wrap(props)
  wrapper.find('#create-club-submit').simulate('click')
  expect(props.onPostClub).toHaveBeenCalled()
})
