import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BoardPage } from 'components'

storiesOf('BoardPage', module)
  .add('default', () => (
    <BoardPage />
  ))
