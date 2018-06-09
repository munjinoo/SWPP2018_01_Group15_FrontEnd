import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { EventDetailPage } from 'components'

storiesOf('EventDetailPage', module)
  .add('default', () => (
    <EventDetailPage />
  ))
