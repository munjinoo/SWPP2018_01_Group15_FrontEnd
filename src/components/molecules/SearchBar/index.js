import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link, withRouter } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SearchBar = () => {
  let name = ''
  let query = {}
  const onClick = () => {
    if (name != undefined)
      query.name = name.value
  }
  return (
    <Wrapper>
      <input type="text" ref={node => {name = node;}} />
      <Link to={{ pathname: "/search/", query: query }} onClick={onClick} >검색</Link>
    </Wrapper>
  )
}

export default SearchBar
