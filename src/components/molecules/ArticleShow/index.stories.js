import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArticleShow } from 'components'

storiesOf('ArticleShow', module)
  .add('default', () => (
    <ArticleShow>Hello</ArticleShow>
  ))
  .add('reverse', () => (
    <ArticleShow reverse>Hello</ArticleShow>
  ))
