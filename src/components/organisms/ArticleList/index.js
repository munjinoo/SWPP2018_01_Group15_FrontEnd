import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleList = ({ boardState={name: "", articles: [], needLoading: true}, boardid, onLoad }) => {
  const loadingFunc = () => {
    onLoad(boardid)
  }
  console.log(boardState.needLoading)
  if (boardState.needLoading)
    return(
      <Wrapper>
        <Load onLoad={loadingFunc} />
      </Wrapper>
    )
  console.log(boardState)  
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

ArticleList.propTypes = {
  reverse: PropTypes.bool,
}

export default ArticleList
