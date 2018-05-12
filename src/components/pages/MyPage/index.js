import React from 'react'
import { ClubList } from 'containers'
import { Link } from 'react-router'

const MyPage = () => {
  return (
    <div>
      <ClubList />
      <Link to="/club/create">
        새 동아리방 만들기
      </Link>
    </div>
  )
}

export default MyPage
