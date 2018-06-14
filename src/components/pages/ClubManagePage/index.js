import React from 'react'
import { MenuBar, BoardList, CreateBoard, ChangeUserStatus } from 'containers'


const ClubManagePage = (props) => {
  return (
    <div>
      <MenuBar />
      <BoardList clubid={props.params.clubid} />
      <CreateBoard />
      <ChangeUserStatus clubid={props.params.clubid} />
    </div>
  )
}

export default ClubManagePage
