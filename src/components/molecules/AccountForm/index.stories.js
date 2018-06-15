import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountForm } from 'components'

storiesOf('AccountForm', module)
  .add('default', () => (
    <AccountForm>Hello</AccountForm>
  ))
  .add('reverse', () => (
    <AccountForm reverse>Hello</AccountForm>
  ))
