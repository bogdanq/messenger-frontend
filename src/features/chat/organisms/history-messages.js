import React from 'react'
import styled from 'styled-components'
import { MessagesArea, DialogInfo } from '.'
import { Row } from '../../../ui/atoms'
import { Container } from '../../../ui/template'
import { useDropdown } from '../../../hooks/useDropdown'

export const HistoryMessages = () => {
  const refDialogInfo = React.useRef(null)
  const [opened, toggle] = useDropdown(refDialogInfo)

  return (
    <HistoryMessagesWrapper>
      <MessagesHeader toggle={toggle} />
      <Row>
        <Container>
          <MessagesArea />
          {opened && <DialogInfo refDialogInfo={refDialogInfo} />}
        </Container>
      </Row>
    </HistoryMessagesWrapper>
  )
}

const HistoryMessagesWrapper = styled.div`
  width: 100%;
`
const MessagesHeader = ({ toggle }) => {
  return (
    <MessagesHeaderWrapper>
      <h1>Header</h1>
      <button onClick={toggle}>toggle site bar</button>
    </MessagesHeaderWrapper>
  )
}

const MessagesHeaderWrapper = styled.div`
  border: 1px solid green;
  min-height: 80px;
`
