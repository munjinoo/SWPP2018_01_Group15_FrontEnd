import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BoardList } from 'components'

storiesOf('BoardList', module)
  .add('default', () => (
    <BoardList />
  ))
  .add('reverse', () => (
    <BoardList reverse />
  ))
