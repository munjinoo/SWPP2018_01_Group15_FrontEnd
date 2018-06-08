import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserList } from 'components'

storiesOf('UserList', module)
  .add('default', () => (
    <UserList>Hello</UserList>
  ))
  .add('reverse', () => (
    <UserList reverse>Hello</UserList>
  ))
