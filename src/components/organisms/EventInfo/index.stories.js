import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { EventInfo } from 'components'

storiesOf('EventInfo', module)
  .add('default', () => (
    <EventInfo />
  ))
  .add('reverse', () => (
    <EventInfo reverse />
  ))
