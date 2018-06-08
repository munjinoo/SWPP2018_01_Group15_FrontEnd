import React from 'react'
import { BoardList, CreateBoard, ChangeUserStatus } from 'containers'


const ClubManagePage = (props) => {

  return (
    <div>
      <BoardList clubid={props.routeParams.clubid} />
      <CreateBoard />
      <ChangeUserStatus clubid={props.routeParams.clubid} />
    </div>
  )
}

export default ClubManagePage
