import React from 'react'
import { BoardList, CreateBoard } from 'containers'


const ClubManagePage = (props) => {

  return (
    <div>
      <BoardList clubid={props.routeParams.clubid} />
      <CreateBoard/>
    </div>
  )
}

export default ClubManagePage
