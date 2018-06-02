import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { Load } from 'components'
import lifecycle from 'react-pure-lifecycle'

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

const ClubList = ({ userState = { clubs_as_admin: [], clubs_as_member: []} }) => {
  console.log(userState);
  const as_member = userState.clubs_as_member
  const as_admin = userState.clubs_as_admin
  let only_as_member = []
  console.log("as_member", as_member)
  console.log("as_admin", as_admin)
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
  
  console.log("only_as_member", only_as_member)

  return (
    <Wrapper>
      내가 관리하는 동아리 <br />
      <ul>
        {as_admin.map(club =>
          <li key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </li>
        )}
      </ul>
      내가 가입한 동아리<br />
      <ul>
        {only_as_member.map(club =>
          <li key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default lifecycle(methods)(ClubList)