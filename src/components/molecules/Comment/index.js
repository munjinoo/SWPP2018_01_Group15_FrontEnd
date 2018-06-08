import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Comment = ({ comment, onPut, onDelete }) => {
  return (
    <Wrapper>
      제목: {comment.title}<br/>
      내용: {comment.content}<br/>
      <button>수정</button>
      <button>삭제</button>
    </Wrapper>
  )
}

export default Comment
