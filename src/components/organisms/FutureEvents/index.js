import React from 'react'
import styled from 'styled-components'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { dateTimeConvert } from 'services/convert'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const FutureEvents = ({ future_events = [], clubid }) => {
  return (
    <div>
      <br/>
      {future_events.map(event =>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card key={event.id} body>
              <CardTitle>{event.name}</CardTitle>
              <CardSubtitle>{dateTimeConvert(event.date)}</CardSubtitle>
              <Link to={`/club/${clubid}/event/${event.id}/`}>자세히 보기</Link>
          </Card><br/>
        </Col>
      )}
    </div>
  )
}


export default FutureEvents
