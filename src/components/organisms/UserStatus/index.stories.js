import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserStatus } from 'components'

storiesOf('UserStatus', module)
  .add('default', () => (
    <UserStatus />
  ))
  .add('reverse', () => (
    <UserStatus reverse />
  ))
