import React from 'react'
import { MenuBar, ArticleDetail } from 'containers'
import { Link } from 'react-router'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const ArticlePage = ({ params }) => {
  const clubid = params.clubid
  const boardid = params.boardid
  const articleid = params.articleid
  return (
    <div>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem><Link to={`/club/${clubid}`}>동아리</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to={`/club/${clubid}/board/${boardid}`}>게시판</Link></BreadcrumbItem>
        <BreadcrumbItem active>글</BreadcrumbItem>
      </Breadcrumb>
      <ArticleDetail articleid={articleid}/>
    </div>
  )
}

export default ArticlePage
