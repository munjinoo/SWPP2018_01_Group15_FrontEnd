import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Comment } from 'components'

storiesOf('Comment', module)
  .add('default', () => (
    <Comment>Hello</Comment>
  ))
  .add('reverse', () => (
    <Comment reverse>Hello</Comment>
  ))
