import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'
import { Load } from 'components'
import { Link } from 'react-router'

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

const ArticleList = ({ boardState={name: "", articles: [], needLoading: true}, boardid }) => {
  return (    
    <Wrapper>
      {boardState.name}  <br />
      <ul>
        {boardState.articles.map((article) =>
          <li key={article.id}>
              <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        )}
      </ul>
    </Wrapper>

  )
}

export default lifecycle(methods)(ArticleList)
