import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ClubAccountingPage } from 'components'

storiesOf('ClubAccountingPage', module)
  .add('default', () => (
    <ClubAccountingPage />
  ))
