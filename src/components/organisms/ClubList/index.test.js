import React from 'react'
import { mount } from 'enzyme'
import ClubList from '.'

const wrap = (props = {}) => mount(<ClubList {...props} />)

it('all clubs should be rendered', () => {
  const props = {
    userState: {
        clubs_as_admin: [
          {id: 1, name: 'club1'}
        ],
        clubs_as_member: [
          {id: 2, name: 'club2'},
          {id: 3, name: 'club3'},
        ]
    },
    onLoad: jest.fn()
  }
  const wrapper = wrap(props)
  expect(props.onLoad).toHaveBeenCalled()
})
