import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResult } from 'components'

storiesOf('SearchResult', module)
  .add('default', () => (
    <SearchResult />
  ))
  .add('reverse', () => (
    <SearchResult reverse />
  ))
