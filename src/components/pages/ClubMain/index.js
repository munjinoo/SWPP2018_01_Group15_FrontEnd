import React from 'react'
import { Link } from 'react-router'

const ClubMain = () => {
  return (
    <div>
      <Link to="club/:clubid/event"> 동아리 이벤트 </Link>
      <Link to="club/:clubid/manage"> 동아리 관리 </Link>
      <Link to="club/:clubid/account"> 동아리 회계 관리 </Link>     
    </div>
  )
}

export default ClubMain
