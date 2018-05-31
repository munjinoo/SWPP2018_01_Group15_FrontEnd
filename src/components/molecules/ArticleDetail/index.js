import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleDetail = ({ articleState={title: "", content: "", created_at: "", updated_at:"", writer:"", comments: [], needLoading: true}, articleid, onLoad }) => {

  const loadingFunc = () => {
    onLoad(articleid)
  }
  if (articleState.needLoading)
    return(
      <Wrapper>
        <Load onLoad={loadingFunc} />
      </Wrapper>
    )

  return (
    <Wrapper>
      제목: {articleState.title} <br/>
      글쓴이: {articleState.writer} <br/>
      작성시간: {articleState.created_at} <br/>
      {articleState.content} 
    </Wrapper>
  )
}

ArticleDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArticleDetail
