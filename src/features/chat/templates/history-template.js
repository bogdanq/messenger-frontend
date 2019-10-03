import React from 'react'
import { Row } from '../../../ui/atoms'
import { Container } from '../../../ui/template'

export const HistoryMessageTemplate = ({ messages, groupInfo }) => (
  <Row>
    <Container>
      <div>{messages}</div>
      <div>{groupInfo}</div>
    </Container>
  </Row>
)
