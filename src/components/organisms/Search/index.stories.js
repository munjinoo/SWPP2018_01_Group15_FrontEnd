import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Search } from 'components'

storiesOf('Search', module)
  .add('default', () => (
    <Search />
  ))
  .add('reverse', () => (
    <Search reverse />
  ))
