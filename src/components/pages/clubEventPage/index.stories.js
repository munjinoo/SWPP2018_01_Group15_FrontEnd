import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ClubEventPage } from 'components'

storiesOf('ClubEventPage', module)
  .add('default', () => (
    <ClubEventPage />
  ))
