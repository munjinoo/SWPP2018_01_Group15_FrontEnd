import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CommentList } from 'components'

storiesOf('CommentList', module)
  .add('default', () => (
    <CommentList>Hello</CommentList>
  ))
  .add('reverse', () => (
    <CommentList reverse>Hello</CommentList>
  ))
