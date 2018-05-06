import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ClubList = ({ clubState = { admin: [], members: []}, onClick }) => {
  return (
    <Wrapper>
      <h4>내가 관리하는 동아리</h4>
      <ul>
        {clubState.admin.map(club =>
          <li key={club} onClick={onClick}>{club}</li>
        )}
      </ul>
      <h4>내가 가입한 동아리</h4>
      <ul>
        {clubState.members.map(club =>
          <li key={club} onClick={onClick}>{club}</li>
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
  onClick: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
}

export default ClubList
