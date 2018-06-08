import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LoginModal } from 'components'

storiesOf('LoginModal', module)
  .add('default', () => (
    <LoginModal>Hello</LoginModal>
  ))
  .add('reverse', () => (
    <LoginModal reverse>Hello</LoginModal>
  ))
