import React from 'react'
import { Badge, Card, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { dateTimeConvert } from 'services/convert'
import lifecycle from 'react-pure-lifecycle'
import { Attendance } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad(props.eventid)
}

const methods = {
  componentDidMount
}

const EventInfo = ({ eventState = { name: null, date: null, content: null }, eventid, clubid }) => {
  const now = new Date()
  const date = new Date(eventState.date)
  const isPast = now > date
  const badge = isPast ? <Badge color="secondary">지난 행사</Badge> : <Badge color="success">다가오는 행사</Badge>
  return (
    <Card body>
      <CardTitle>{eventState.name} {badge}</CardTitle>
      <CardSubtitle>{dateTimeConvert(eventState.date)}</CardSubtitle>
      <hr/>
      <CardText>{eventState.content}</CardText>
      <hr/>
      <Attendance eventState={eventState} eventid={eventid} clubid={clubid} />
    </Card>
  )
}


export default lifecycle(methods)(EventInfo)
