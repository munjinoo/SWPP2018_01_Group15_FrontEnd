import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ClubList = ({ userState = { clubs_as_admin: [], clubs_as_member: []} }) => {
  console.log(userState);
  return (
    <Wrapper>
      내가 관리하는 동아리 <br />
      <ul>
        {userState.club_as_admin.map(club =>
          <Link to="/club/${club.id}">
            <li key={club.id}>{club.name}</li>
          </Link>
        )}
      </ul>
      내가 가입한 동아리<br />
      <ul>
        {userState.club_as_member.map(club =>
          <Link to="/club/${club.id}">
          <li key={club.id} onClick={onClick}>{club.name}</li>
        </Link>
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

export default ClubList
