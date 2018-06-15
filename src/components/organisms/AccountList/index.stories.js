import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountList } from 'components'

storiesOf('AccountList', module)
  .add('default', () => (
    <AccountList />
  ))
  .add('reverse', () => (
    <AccountList reverse />
  ))
