import React, { PropTypes } from 'react'
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
      내가 관리하는 동아리 <br />
      <ul id="clubs-as-admin">
        {userState.clubs_as_admin.map(club =>
          <li key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </li>
        )}
      </ul>
      내가 가입한 동아리<br />
      <ul id="clubs-as-member">
        {userState.clubs_as_member.map(club =>
          <li key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

ClubList.propTypes = {
  clubstate: PropTypes.shape({
    admin: PropTypes.arrayOf(PropTypes.number),
    members: PropTypes.arrayOf(PropTypes.number)
  }),
  reverse: PropTypes.bool,
}

export default lifecycle(methods)(ClubList)
