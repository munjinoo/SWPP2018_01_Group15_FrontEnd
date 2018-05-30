import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { VerifyToken } from 'components'

storiesOf('VerifyToken', module)
  .add('default', () => (
    <VerifyToken>Hello</VerifyToken>
  ))
  .add('reverse', () => (
    <VerifyToken reverse>Hello</VerifyToken>
  ))
