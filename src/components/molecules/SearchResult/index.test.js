import React from 'react'
import { shallow } from 'enzyme'
import SearchResult from '.'

const wrap = (props = {}) => shallow(<SearchResult {...props} />)

it('renders results well', () => {
  let club_list = []
  for (var i=0; i<10; i++) {
    club_list.push({id: i, name: `test${i}`})
  }
  const wrapper = wrap({search_result: club_list})
  expect(wrapper.find({ id: 'search-result' }).children()).toHaveLength(10)
})

it('renders info message when there\'s no result', () => {
  const club_list = []
  const wrapper = wrap({search_result: club_list})
  expect(wrapper.find({ id: 'search-result' }).exists()).toBe(false)
  expect(wrapper.find({ id: 'info-nothing' }).exists()).toBe(true)
})
