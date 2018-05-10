import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TestPage } from 'components'

storiesOf('TestPage', module)
  .add('default', () => (
    <TestPage />
  ))
