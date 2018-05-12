import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateClubPage } from 'components'

storiesOf('CreateClubPage', module)
  .add('default', () => (
    <CreateClubPage />
  ))
