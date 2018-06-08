import React from 'react'
import { ArticleDetail } from 'containers'

const ArticlePage = ({routeParams}) => {
  const article_id=routeParams.articleid;
  return (
    <div>
      <ArticleDetail articleid={article_id} />
    </div>
  )
}

export default ArticlePage
