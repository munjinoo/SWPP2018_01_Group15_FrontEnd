import React from 'react'
import { shallow } from 'enzyme'
import UserList from '.'

const wrap = (props = {}) => shallow(<UserList {...props} />)

it('renders user list', () => {
  const props = {
    title: 'test title',
    user_list: [
      {id: 1, username: 'test1'},
      {id: 2, username: 'test2'},
      {id: 3, username: 'test3'}
    ]
  }
  const wrapper = wrap(props)
  expect(wrapper.find('ul').children()).toHaveLength(3)
})
