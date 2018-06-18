import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AttendanceStatistic } from 'components'

storiesOf('AttendanceStatistic', module)
  .add('default', () => (
    <AttendanceStatistic />
  ))
  .add('reverse', () => (
    <AttendanceStatistic reverse />
  ))
