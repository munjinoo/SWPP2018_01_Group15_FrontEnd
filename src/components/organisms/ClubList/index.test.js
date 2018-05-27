import React from 'react'
import { shallow } from 'enzyme'
import ClubList from '.'
import Load from 'components'

const wrap = (props = {}) => shallow(<ClubList {...props} />)

it('all clubs should be rendered', () => {
  const props = {
    userState: {
      needLoading: {
        club: false
      },
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
  expect(wrapper.find('#clubs-as-admin').children()).toHaveLength(1)
  expect(wrapper.find('#clubs-as-member').children()).toHaveLength(2)
})
