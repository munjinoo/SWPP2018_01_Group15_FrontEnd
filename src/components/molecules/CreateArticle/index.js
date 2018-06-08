import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateArticle = ({ boardState, onPostArticle }) => {
  let title = '';
  let content = '';

  const onClick = () => {
    if (title != undefined && content != undefined) {
      onPostArticle(boardState.id, title.value, content.value);
      title.value= '';    
      content.value='';
    }
  }

  return (
    <Wrapper>
      제목: <input type="text" ref={node => {title = node;}} /> <br/>
      <input type="text" ref={node => {content = node;}} /> <br/>
      <button onClick={onClick}>게시</button>
    </Wrapper>
  )
}

export default CreateArticle
