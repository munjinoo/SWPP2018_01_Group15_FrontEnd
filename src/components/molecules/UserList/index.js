import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const UserList = ({ Child=undefined, user_list=[], title }) => {
  return (
    <Wrapper>
      {title}
      <ul>
        {user_list.map(user =>
          <li key={user.id}>{user.name} <Child user={user} /></li>
        )}
      </ul>
    </Wrapper>
  )
}

export default UserList
