import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ChangeClubInfo } from 'components'

storiesOf('ChangeClubInfo', module)
  .add('default', () => (
    <ChangeClubInfo />
  ))
  .add('reverse', () => (
    <ChangeClubInfo reverse />
  ))
