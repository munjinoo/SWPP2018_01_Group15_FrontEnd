import React, { PropTypes } from 'react'
import styled from 'styled-components'
import lifecycle from 'react-pure-lifecycle'
import { font, palette } from 'styled-theme'
import { SearchBar, SearchResult } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad(props.query)
}

const methods = {
  componentDidMount
}

const Search = ({ search_result }) => {
  return (
    <Wrapper>
      <SearchBar />
      <SearchResult search_result={search_result} />
    </Wrapper>
  )
}

Search.propTypes = {
  reverse: PropTypes.bool,
}

export default lifecycle(methods)(Search)
