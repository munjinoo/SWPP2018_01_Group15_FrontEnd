import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PastEvents } from 'components'

storiesOf('PastEvents', module)
  .add('default', () => (
    <PastEvents />
  ))
  .add('reverse', () => (
    <PastEvents reverse />
  ))
