import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FutureAttendance } from 'components'

storiesOf('FutureAttendance', module)
  .add('default', () => (
    <FutureAttendance />
  ))
  .add('reverse', () => (
    <FutureAttendance reverse />
  ))
