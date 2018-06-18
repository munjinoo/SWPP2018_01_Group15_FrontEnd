import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { UserList } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ChangeUserStatus = ({ clubid, admin=[], members=[], waitings=[], onChangeUserStatus, onKickUser }) => {
  const Child = ({ user }) => {
    const onChange = () => {
      onChangeUserStatus(clubid, user.id)
    }
    const onDelete = () => {
      onKickUser(clubid, user.id)
    }
    return (
      <ButtonGroup>
        <Button onClick={onChange} color="info" size="sm">등급 수정</Button>
        <Button onClick={onDelete} color="danger" size="sm">제명</Button>
      </ButtonGroup>
    )
  }
  const admin_length = admin.length
  const not_admin = members.filter(member => {
    for (var i=0; i<admin_length; i++) {
      if (admin[i].id == member.id)
        return false
    }
    return true
  })
  return (
    <Wrapper>
      <UserList title="관리자" user_list={admin} Child={Child} />
      <UserList title="일반회원" user_list={not_admin} Child={Child} />
      <UserList title="대기 중" user_list={waitings} Child={Child} />
    </Wrapper>
  )
}

export default ChangeUserStatus
