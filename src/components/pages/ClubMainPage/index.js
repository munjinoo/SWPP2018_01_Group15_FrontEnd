import React from 'react'
import { Button, ButtonGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { ClubMain, MenuBar } from 'containers'

const ClubMainPage = ({ params }) => {
  const club_id = params.clubid
  return (
    <div>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem active>동아리</BreadcrumbItem>
      </Breadcrumb>
      <ClubMain clubid={club_id} />
    </div>
  )
}

export default ClubMainPage
