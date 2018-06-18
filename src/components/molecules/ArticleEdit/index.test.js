import React from 'react'
import { shallow } from 'enzyme'
import ArticleEdit from '.'

const wrap = (props = {}) => shallow(<ArticleEdit {...props} />)

it('handle onPutArticle when click submit', () => {
  const props = {
    articleid: 1,
    title: 'test',
    content: 'test',
    onPutArticle: jest.fn()
  }
  const wrapper = wrap(props)
  wrapper.find('#edit-article').simulate('click')
  expect(props.onPutArticle).toHaveBeenCalled()
})

