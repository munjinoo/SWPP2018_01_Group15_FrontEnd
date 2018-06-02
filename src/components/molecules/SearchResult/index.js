import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SearchResult = ({ search_result }) => {
  if (search_result.length === 0)
    return (<Wrapper><p id="info-nothing">검색 결과가 없습니다.</p></Wrapper>)
  return (
    <Wrapper>
      <ul id="search-result">
        {search_result.map(club =>
          <li key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

SearchResult.propTypes = {
  reverse: PropTypes.bool,
}

export default SearchResult
