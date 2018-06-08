import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import styled from 'styled-components'
import lifecycle from 'react-pure-lifecycle'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad()
}

const methods = {
  componentDidMount
}

const ClubList = ({ userState = { clubs_as_admin: [], clubs_as_member: [], needLoading: {club: true}}, onLoad }) => {
  return (
    <Wrapper>
      <h3>내가 관리하는 동아리</h3>
      <ListGroup id="clubs-as-admin" flush>
        {userState.clubs_as_admin.map(club =>
          <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`} action>{club.name}</ListGroupItem>
        )}
      </ListGroup>
      <h3>내가 가입한 동아리</h3>
      <ListGroup id="clubs-as-member">
        {userState.clubs_as_member.map(club =>
          <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`}>{club.name}</ListGroupItem>
        )}
      </ListGroup>
    </Wrapper>
  )
}

export default lifecycle(methods)(ClubList)
