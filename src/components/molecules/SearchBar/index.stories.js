import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchBar } from 'components'

storiesOf('SearchBar', module)
  .add('default', () => (
    <SearchBar>Hello</SearchBar>
  ))
  .add('reverse', () => (
    <SearchBar reverse>Hello</SearchBar>
  ))
