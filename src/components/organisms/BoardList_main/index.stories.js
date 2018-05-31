import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BoardList_main } from 'components'

storiesOf('BoardList_main', module)
  .add('default', () => (
    <BoardList_main />
  ))
  .add('reverse', () => (
    <BoardList_main reverse />
  ))
