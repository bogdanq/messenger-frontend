import React from 'react'
import styled from 'styled-components'
import { Row } from '../../../../../ui/atoms'
import { Container } from '../../../../../ui/template'
import { useDropdown } from '../../../../../hooks/useDropdown'

export const MessagesArea = ({
  messagesArea = () => <h1>area for messages</h1>,
  groupInfo = () => <h1>group info</h1>,
}) => {
  const [opened, toggle] = useDropdown()

  return (
    <AreaContainer>
      <AreaHeader>
        chat header
        <button onClick={toggle}>{opened ? 'CloseMenu' : 'OpenMenu'}</button>,
      </AreaHeader>
      <Row>
        <Container>
          <MessageArea>{messagesArea()}</MessageArea>
          {opened && <GroupInfo>{groupInfo()}</GroupInfo>}
        </Container>
      </Row>
    </AreaContainer>
  )
}

const AreaContainer = styled.div`
  border: 1px solid blue;
  width: 75%;
`

const AreaHeader = styled.div`
  border: 1px solid green;
  height: 50px;
`

const MessageArea = styled.div`
  border: 1px solid blue;
  width: 100%;
`
const GroupInfo = styled.div`
  border: 1px solid green;
  width: 30%;
`
