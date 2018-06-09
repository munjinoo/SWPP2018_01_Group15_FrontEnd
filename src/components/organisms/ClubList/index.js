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

const ClubList = ({ userState = { clubs_as_admin: [], clubs_as_member: [], onLoad }) => {
  const as_member = userState.clubs_as_member
  const as_admin = userState.clubs_as_admin
  let only_as_member = []
  for (var i=0; i<as_member.length; i++) {
    var exists = false
    for (var j=0; j<as_admin.length; j++) {
      if (as_admin[j].id == as_member[i].id) {
        exists = true
      }
    }
    if (!exists) {
      only_as_member.push(as_member[i])
    }
  }
  return (
    <Wrapper>
      <h3>내가 관리하는 동아리</h3>
      <ListGroup id="clubs-as-admin" flush>
        {as_admin.map(club =>
          <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`} action>{club.name}</ListGroupItem>
        )}
      </ListGroup>
      <h3>내가 가입한 동아리</h3>
      <ListGroup id="clubs-as-member">
        {only_as_member.map(club =>
          <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`}>{club.name}</ListGroupItem>
        )}
      </ListGroup>
    </Wrapper>
  )
}

export default lifecycle(methods)(ClubList)
