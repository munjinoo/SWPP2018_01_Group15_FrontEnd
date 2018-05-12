import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MyPage } from 'components'

storiesOf('MyPage', module)
  .add('default', () => (
    <MyPage />
  ))
