import React from 'react'
import { ArticleDetail } from 'containers'

const ArticlePage = ({ params }) => {
  const article_id = params.articleid;
  return (
    <div>
      <ArticleDetail articleid={article_id}/>
    </div>
  )
}

export default ArticlePage
