import React from 'react'
import { shallow } from 'enzyme'
import CreateEvent from '.'

const wrap = (props = {}) => shallow(<CreateEvent {...props} />)

it('handle onPostEvent when submit', () => {
  const props = {
    eventState: {},
    clubid: 1,
    onPostEvent: jest.fn()
  }
  const wrapper = wrap(props)
  wrapper.find('#post-event').simulate('click')
  expect(props.onPostEvent).toHaveBeenCalled()
})
