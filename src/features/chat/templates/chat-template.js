import React from 'react'
import styled from 'styled-components'
import { Row } from '../../../ui/atoms'
import { Container } from '../../../ui/template'

export const ChatTemplate = ({ userGroups, messagesArea }) => {
  return (
    <ChatWrapper>
      <Row height='100%'>
        <Container>
          <DialogsContainer>{userGroups()}</DialogsContainer>
          {messagesArea()}
        </Container>
      </Row>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  height: 100vh;
`

const DialogsContainer = styled.div`
  width: 350px;
  background: #f8f7f3;
`
