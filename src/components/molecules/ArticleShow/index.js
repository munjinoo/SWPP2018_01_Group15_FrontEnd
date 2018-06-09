import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`



const ArticleShow = ({ articleid, board, title, content, created_at, updated_at, writer, comments, onDeleteArticle }) => {

const onClick = () => {
  onDeleteArticle(articleid)

}

if(updated_at==null) {
  return (
    <Wrapper>
      제목: {title} <br/>
      글쓴이: {writer} <br/>
      작성시간: {created_at} <br/>
      {content} <br/>
      <button onClick={onClick}> 삭제 </button>
    </Wrapper>
  )
}
else {
  return (
    <Wrapper>
      제목: {title} <br/>
      글쓴이: {writer} <br/>
      작성시간: {created_at} (updated at {updated_at})<br/>
      {content} <br/>
      <button onClick={onClick}> 삭제 </button>
    </Wrapper>
  )
  }
}
  



export default ArticleShow
