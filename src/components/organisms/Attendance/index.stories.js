import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Attendance } from 'components'

storiesOf('Attendance', module)
  .add('default', () => (
    <Attendance />
  ))
  .add('reverse', () => (
    <Attendance reverse />
  ))
