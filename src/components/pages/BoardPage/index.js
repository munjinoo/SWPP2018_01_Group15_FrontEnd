import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ArticleList, CreateArticle } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const BoardPage = ({ params } ) => {  
  const boardid = params.boardid
  const clubid = params.clubid
  return (
    <Wrapper>
      <ArticleList boardid={boardid} clubid={clubid} /> <br/>
      <CreateArticle />
    </Wrapper>
  )
}

export default BoardPage
