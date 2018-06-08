import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import { Link } from 'react-router'
import { BoardListMain, MenuBar } from 'containers'

const ClubMain = ({ params }) => {
  const club_id = params.clubid
  return (
    <div>
      <MenuBar />
      <ButtonGroup>
        <BoardListMain clubid={club_id} />
        <Button tag={Link} to={`club/${club_id}/event`}>동아리 이벤트</Button>
        <Button tag={Link} to={`club/${club_id}/manage`}>동아리 관리</Button>
        <Button tag={Link} to={`club/${club_id}/account`}>동아리 회계 관리</Button>
      </ButtonGroup>
    </div>
  )
}

export default ClubMain
