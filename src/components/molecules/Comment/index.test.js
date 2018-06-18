import React from 'react'
import { shallow } from 'enzyme'
import Comment from '.'

const wrap = (props = {}) => shallow(<Comment {...props} />)

it('renders title and content', () => {
  const props = {
      comment: {
        title: 'test title',
        content: 'test content'
      }
  }
  const wrapper = wrap(props)
  expect(wrapper.find(props.comment.title)).toEqual(expect.anything())
  expect(wrapper.find(props.comment.content)).toEqual(expect.anything())
})
