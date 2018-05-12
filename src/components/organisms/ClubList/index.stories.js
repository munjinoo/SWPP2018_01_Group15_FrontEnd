import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ClubList } from 'components'

storiesOf('ClubList', module)
  .add('default', () => (
    <ClubList />
  ))
  .add('reverse', () => (
    <ClubList reverse />
  ))
