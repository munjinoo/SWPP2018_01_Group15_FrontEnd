import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ClubManagePage } from 'components'

storiesOf('ClubManagePage', module)
  .add('default', () => (
    <ClubManagePage />
  ))
