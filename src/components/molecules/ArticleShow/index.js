import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Col } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { dateTimeConvert } from 'services/convert'
import { CommentList } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleShow = ({ uid, articleid, articleState, children }) => {
  const updated_at = articleState.updated_at === null
      ? '' 
      : '최종 수정: ' + dateTimeConvert(articleState.updated_at)
  const isWriter = uid === articleState.writer.id

  return [
    <Card>
      <CardHeader>
        <h3>글</h3>
      </CardHeader>
      <CardBody>
        <CardTitle>{articleState.title}</CardTitle>
        <CardText>
          {articleState.content.split('\n').map(line =>
            <div>{line}<br/></div>
          )}
        </CardText>
      </CardBody>
      <CardFooter>
        <small>{articleState.writer.name}</small><br/>
        <small className="text-muted">{dateTimeConvert(articleState.created_at)} {updated_at}</small><br/>
        {isWriter ? children : ''}
      </CardFooter>
    </Card>,
    <br/>,
    <CommentList uid={uid} articleid={articleState.id} comment_list={articleState.comments} />
  ]
}

export default ArticleShow
