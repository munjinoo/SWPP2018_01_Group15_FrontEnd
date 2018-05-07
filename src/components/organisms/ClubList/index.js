import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ClubList = ({ clubState = {admin: [], members: []} }) => {
  return (
    <Wrapper>
      내가 관리하는 동아리 <br />
      <ul>
        {clubState.admin.map(club =>
          <Link to="/club/${club.id}">
            <li key={club}>{club}</li>
          </Link>
        )}
      </ul>
      내가 가입한 동아리<br />
      <ul>
        {clubState.members.map(club =>
          <Link to="/club/${club.id}">
          <li key={club} onClick={onClick}>{club}</li>
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
