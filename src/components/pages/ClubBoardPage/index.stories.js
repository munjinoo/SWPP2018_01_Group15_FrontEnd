import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ClubBoardPage } from 'components'

storiesOf('ClubBoardPage', module)
  .add('default', () => (
    <ClubBoardPage />
  ))
