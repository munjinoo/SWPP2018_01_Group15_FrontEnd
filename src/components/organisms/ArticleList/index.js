import React from 'react'
import { Card, CardTitle, CardSubtitle, Table } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'
import { Link } from 'react-router'
import { CreateArticle } from 'containers'
import { dateTimeConvert } from 'services/convert'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad(props.boardid)
}

const methods = {
  componentDidMount
}

const ArticleList = ({ boardState={name: "", articles: [], needLoading: true}, boardid, clubid }) => {
  return [   
    <Card body>
      <CardTitle>{boardState.name}</CardTitle>
      <CardSubtitle>글쓰기</CardSubtitle>
      <CreateArticle />
    </Card>,
    <br/>,
    <Card body>
      <Table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
        {boardState.articles.map((article) =>
          <tr key={article.id}>
            <td><Link to={`/club/${clubid}/board/${boardid}/${article.id}`}>{article.title}</Link></td>
            <td>{article.writer.name}</td>
            <td>{dateTimeConvert(article.created_at)}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </Card>
  ]
}

export default lifecycle(methods)(ArticleList)
