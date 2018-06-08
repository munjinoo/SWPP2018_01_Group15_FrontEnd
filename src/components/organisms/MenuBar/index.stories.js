import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MenuBar } from 'components'

storiesOf('MenuBar', module)
  .add('default', () => (
    <MenuBar />
  ))
  .add('reverse', () => (
    <MenuBar reverse />
  ))
