import React from 'react'
import { Badge, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
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
    <ListGroup>
      {search_result.map(club =>
        <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`}>
          <ListGroupItemHeading>
            {club.name}{' '}
            <Badge color="success">{club.category}</Badge>{' '}
            <Badge color="info">{club.scope}</Badge>
          </ListGroupItemHeading>
          <ListGroupItemText>{club.introduction}</ListGroupItemText>
        </ListGroupItem>
      )}
    </ListGroup>
  )
}

export default SearchResult
