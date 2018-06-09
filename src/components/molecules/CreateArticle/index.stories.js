import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateArticle } from 'components'

storiesOf('CreateArticle', module)
  .add('default', () => (
    <CreateArticle>Hello</CreateArticle>
  ))
  .add('reverse', () => (
    <CreateArticle reverse>Hello</CreateArticle>
  ))
