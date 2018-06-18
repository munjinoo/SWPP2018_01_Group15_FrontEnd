import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Events } from 'components'

storiesOf('Events', module)
  .add('default', () => (
    <Events />
  ))
  .add('reverse', () => (
    <Events reverse />
  ))
