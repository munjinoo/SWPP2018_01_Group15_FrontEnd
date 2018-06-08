import React from 'react'
import { mount } from 'enzyme'
import Search from '.'

const wrap = (props = {}) => mount(<Search {...props} />)

it('renders', () => {
  const props = {
    onLoad: jest.fn(),
    query: {},
    search_result: []
  }
  const wrapper = wrap(props)
  expect(props.onLoad).toHaveBeenCalled()
  expect(wrapper.find('SearchBar').exists()).toBe(true)
  expect(wrapper.find('SearchResult').exists()).toBe(true)
})
