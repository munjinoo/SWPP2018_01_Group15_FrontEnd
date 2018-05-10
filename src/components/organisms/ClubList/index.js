import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ClubList = ({ userState = { clubs_as_admin: [], clubs_as_member: [], needLoading: true}, onLoad }) => {
  if (userState.needLoading)
    return (
      <Wrapper>
        <Load onLoad={onLoad} />
      </Wrapper>
    )
  console.log(userState);
  return (
    <Wrapper>
      내가 관리하는 동아리 <br />
      <ul>
        {userState.clubs_as_admin.map(club =>
          <li key={club.id}>
            <Link to={`/club/${club.id}`}>{club.name}</Link>
          </li>
        )}
      </ul>
      내가 가입한 동아리<br />
      <ul>
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

export default ClubList
