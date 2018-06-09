import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArticleList } from 'components'

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList />
  ))
  .add('reverse', () => (
    <ArticleList reverse />
  ))
