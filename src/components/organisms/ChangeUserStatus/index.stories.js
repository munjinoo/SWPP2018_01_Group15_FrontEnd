import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ChangeUserStatus } from 'components'

storiesOf('ChangeUserStatus', module)
  .add('default', () => (
    <ChangeUserStatus />
  ))
  .add('reverse', () => (
    <ChangeUserStatus reverse />
  ))
