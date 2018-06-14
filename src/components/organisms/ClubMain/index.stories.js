import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ClubMain } from 'components'

storiesOf('ClubMain', module)
  .add('default', () => (
    <ClubMain />
  ))
  .add('reverse', () => (
    <ClubMain reverse />
  ))
