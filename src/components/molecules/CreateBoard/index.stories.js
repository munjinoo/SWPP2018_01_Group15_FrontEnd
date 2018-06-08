import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateBoard } from 'components'

storiesOf('CreateBoard', module)
  .add('default', () => (
    <CreateBoard>Hello</CreateBoard>
  ))
  .add('reverse', () => (
    <CreateBoard reverse>Hello</CreateBoard>
  ))
