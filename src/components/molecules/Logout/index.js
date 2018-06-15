import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import { Link } from 'react-router'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Logout = ({ username, onLogout }) => {
  return (
    <div>
        <Button tag={Link} to="/mypage" color="primary">마이페이지</Button>{' '}
        <Button id="logout" onClick={onLogout}>로그아웃</Button>
    </div>
  )
}

export default Logout
