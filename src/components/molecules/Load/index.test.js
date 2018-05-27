import React from 'react'
import { shallow } from 'enzyme'
import Load from '.'

const wrap = (props = {}) => shallow(<Load {...props} />)

it('call function when rendered', () => {
  const props = {
    onLoad: jest.fn()
  }
  const wrapper = wrap(props)
  expect(props.onLoad).toHaveBeenCalled()
})
