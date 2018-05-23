import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FutureEvents } from 'components'

storiesOf('FutureEvents', module)
  .add('default', () => (
    <FutureEvents />
  ))
  .add('reverse', () => (
    <FutureEvents reverse />
  ))
