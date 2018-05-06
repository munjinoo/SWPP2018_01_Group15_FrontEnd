import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateClub } from 'components'

storiesOf('CreateClub', module)
  .add('default', () => (
    <CreateClub>Hello</CreateClub>
  ))
  .add('reverse', () => (
    <CreateClub reverse>Hello</CreateClub>
  ))
