import React, { PropTypes } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { MenuBar, ArticleList } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const BoardPage = ({ params } ) => {  
  const boardid = params.boardid
  const clubid = params.clubid
  return (
    <Wrapper>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem><Link to={`/club/${clubid}`}>동아리</Link></BreadcrumbItem>
        <BreadcrumbItem>게시판</BreadcrumbItem>
      </Breadcrumb>
      <ArticleList boardid={boardid} clubid={clubid} /> <br/>
    </Wrapper>
  )
}

export default BoardPage
