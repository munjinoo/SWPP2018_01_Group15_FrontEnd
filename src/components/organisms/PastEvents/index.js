import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap'
import { Link } from 'react-router'
import { dateTimeConvert } from 'services/convert'

const PastEvents = ({ past_events = [], clubid }) => {
  return (
    <div>
      <br/>
      {past_events.map(event =>
        <Col sm={{ size:6, offset: 3 }}>
          <Card key={event.id} body>
            <CardTitle>{event.name}</CardTitle>
            <CardSubtitle>{dateTimeConvert(event.date)}</CardSubtitle>
            <Link to={`/club/${clubid}/event/${event.id}/`}>
              자세히 보기
            </Link>
          </Card><br/>
        </Col>
      )}
    </div>
  )
}

export default PastEvents
