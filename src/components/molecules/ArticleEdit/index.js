import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleEdit = ({ articleid, title, content, onPutArticle }) => {
  let new_title='';
  let new_content='';
  const onClick = () => {
    onPutArticle(articleid, new_title.value, new_content.value);
    window.location.reload();
  }
  return (
    <Wrapper>
      제목: <input type="text" defaultValue={title} ref={node => {new_title=node;}} /> <br/>
      <input type="text" defaultValue={content} ref={node => {new_content=node;}} /> <br/>
      <button id="edit-article" onClick={onClick}>수정</button>      
    </Wrapper>
  )
}


export default ArticleEdit
