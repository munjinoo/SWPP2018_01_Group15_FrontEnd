import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Comment } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CommentList = ({ comment_list = [], onPut, onDelete }) => {
  return (
    <Wrapper>
      <ul>
        {comment_list.map(comment =>
          <li key={comment.id}><Comment comment={comment} onPut={onPut} onDelete={onDelete} /></li>
        )}
      </ul>
    </Wrapper>
  )
}

export default CommentList
