import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountDetailPage } from 'components'

storiesOf('AccountDetailPage', module)
  .add('default', () => (
    <AccountDetailPage />
  ))
