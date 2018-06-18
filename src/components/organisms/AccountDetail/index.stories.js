import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountDetail } from 'components'

storiesOf('AccountDetail', module)
  .add('default', () => (
    <AccountDetail />
  ))
  .add('reverse', () => (
    <AccountDetail reverse />
  ))
