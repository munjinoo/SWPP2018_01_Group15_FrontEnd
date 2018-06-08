import React from 'react'
import { BoardList, CreateBoard, ChangeUserStatus } from 'containers'


const ClubManagePage = (props) => {
  return (
    <div>
      <BoardList clubid={props.params.clubid} />
      <CreateBoard />
      <ChangeUserStatus clubid={props.params.clubid} />
    </div>
  )
}

export default ClubManagePage
