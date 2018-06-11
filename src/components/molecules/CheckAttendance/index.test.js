import React from 'react'
import { mount } from 'enzyme'
import CheckAttendance from '.'

const wrap = (props = {}) => mount(<CheckAttendance {...props} />)

it('handle onPostPastAttendees when submit', () => {
  const props = {
    onPostPastAttendees: jest.fn(),
    onLoad: jest.fn(),
    eventid: 1,
    clubid: 1
  }
  const wrapper = wrap(props)
  expect(props.onLoad).toHaveBeenCalled()
  wrapper.find('#check-attendance').simulate('click')
  expect(props.onPostPastAttendees).toHaveBeenCalled()
})
