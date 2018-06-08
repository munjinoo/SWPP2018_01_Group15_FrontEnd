import React from 'react'
import lifecycle from 'react-pure-lifecycle'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad(props.articleid)
}

const methods = {
  componentDidMount
}

const ArticleDetail = ({ articleState={title: "", content: "", created_at: "", updated_at:"", writer:"", comments: []}, articleid }) => {
  return (
    <Wrapper>
      제목: {articleState.title} <br/>
      글쓴이: {articleState.writer} <br/>
      작성시간: {articleState.created_at} <br/>
      {articleState.content} 
    </Wrapper>
  )
}

export default lifecycle(methods)(ArticleDetail)
