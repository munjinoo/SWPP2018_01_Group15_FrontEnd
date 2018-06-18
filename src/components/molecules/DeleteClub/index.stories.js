import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DeleteClub } from 'components'

storiesOf('DeleteClub', module)
  .add('default', () => (
    <DeleteClub>Hello</DeleteClub>
  ))
  .add('reverse', () => (
    <DeleteClub reverse>Hello</DeleteClub>
  ))
