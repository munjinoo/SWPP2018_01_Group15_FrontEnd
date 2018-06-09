import React from 'react'
import { Button } from 'reactstrap'
import { ClubList, MenuBar } from 'containers'
import { Link } from 'react-router'

const MyPage = () => {
  return (
    <div>
      <MenuBar />
      <ClubList />
      <Button tag={Link} to="/club/create">
        새 동아리방 만들기
      </Button>
    </div>
  )
}

export default MyPage
