import React from 'react'
import { Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
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

const Search = ({ search_result, query }) => {
  return (
    <Card>
      <CardHeader>
        <SearchBar search={query.name} />
      </CardHeader>
      <CardBody>
        <SearchResult search_result={search_result} />
      </CardBody>
    </Card>
  )
}

export default lifecycle(methods)(Search)
