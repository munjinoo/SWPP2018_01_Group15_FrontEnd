import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArticleDetail } from 'components'

storiesOf('ArticleDetail', module)
  .add('default', () => (
    <ArticleDetail>Hello</ArticleDetail>
  ))
  .add('reverse', () => (
    <ArticleDetail reverse>Hello</ArticleDetail>
  ))
