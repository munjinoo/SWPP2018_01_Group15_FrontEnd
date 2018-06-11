import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CheckAttendance } from 'components'

storiesOf('CheckAttendance', module)
  .add('default', () => (
    <CheckAttendance>Hello</CheckAttendance>
  ))
  .add('reverse', () => (
    <CheckAttendance reverse>Hello</CheckAttendance>
  ))
