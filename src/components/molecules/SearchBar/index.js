import React from 'react'
import { Input, Button, Form, FormGroup, Col, Row, InputGroup, InputGroupAddon } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link, withRouter } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SearchBar = ({ search, full = false }) => {
  let name = ''
  let query = {}
  const onClick = () => {
    if (name != undefined)
      query.name = name.value
  }
  return (
    <Col sm={ full ? { size: 12 } : { size: 6, offset: 3 } }>
      <InputGroup>
        <Input type="text" defaultValue={search} innerRef={node => {name = node}} />
        <InputGroupAddon addonType="append">
          <Button tag={Link} to={{ pathname: "/search/", query: query }} onClick={onClick}>검색</Button>
        </InputGroupAddon>
      </InputGroup>
    </Col>
  )
}

export default SearchBar
