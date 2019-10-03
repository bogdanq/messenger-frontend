import React from 'react'
import styled from 'styled-components'
import { Row } from '../../../ui/atoms'
import { Container } from '../../../ui/template'

export const ChatTemplate = ({ userGroups, messagesArea }) => {
  return (
    <ChatWrapper>
      <Row>
        <Container>
          <GroupContainer>{userGroups()}</GroupContainer>
          {messagesArea()}
        </Container>
      </Row>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  height: 100vh;
`

const GroupContainer = styled.div`
  border: 1px solid red;
  width: 25%;
`
