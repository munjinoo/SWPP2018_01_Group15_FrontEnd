import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Login } from 'components'

storiesOf('Login', module)
  .add('default', () => (
    <Login>Hello</Login>
  ))
  .add('reverse', () => (
    <Login reverse>Hello</Login>
  ))
