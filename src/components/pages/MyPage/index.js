import React from 'react'
import { ClubList, CreateClub } from 'containers'
import { Link } from 'react-router'

const MyPage = () => {
  return (
    <div>
      <ClubList />
      <Link to="/club/create">
        <button> 새 동아리방 만들기 </button>
      </Link>
    </div>
  )
}

export default MyPage
