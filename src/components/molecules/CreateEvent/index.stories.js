import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateEvent } from 'components'

storiesOf('CreateEvent', module)
  .add('default', () => (
    <CreateEvent>Hello</CreateEvent>
  ))
  .add('reverse', () => (
    <CreateEvent reverse>Hello</CreateEvent>
  ))
