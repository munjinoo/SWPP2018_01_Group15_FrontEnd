import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PastAttendance } from 'components'

storiesOf('PastAttendance', module)
  .add('default', () => (
    <PastAttendance />
  ))
  .add('reverse', () => (
    <PastAttendance reverse />
  ))
