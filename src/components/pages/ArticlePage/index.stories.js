import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArticlePage } from 'components'

storiesOf('ArticlePage', module)
  .add('default', () => (
    <ArticlePage />
  ))
