import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ArticleList, CreateArticle } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const BoardPage = ({ routeParams } ) => {  
  const board_id=routeParams.boardid;
  return (
    <Wrapper>
      <ArticleList boardid={board_id} /> <br/>
      <CreateArticle />
    </Wrapper>
  )
}

export default BoardPage
