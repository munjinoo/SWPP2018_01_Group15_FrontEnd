import React from 'react'
import { shallow } from 'enzyme'
import BoardList_main from '.'

const wrap = (props = {}) => shallow(<BoardList_main {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
