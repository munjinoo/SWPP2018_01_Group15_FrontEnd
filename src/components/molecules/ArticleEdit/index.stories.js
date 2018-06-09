import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArticleEdit } from 'components'

storiesOf('ArticleEdit', module)
  .add('default', () => (
    <ArticleEdit>Hello</ArticleEdit>
  ))
  .add('reverse', () => (
    <ArticleEdit reverse>Hello</ArticleEdit>
  ))
