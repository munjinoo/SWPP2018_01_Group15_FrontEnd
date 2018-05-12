import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Load } from 'components'

storiesOf('Load', module)
  .add('default', () => (
    <Load>Hello</Load>
  ))
  .add('reverse', () => (
    <Load reverse>Hello</Load>
  ))
