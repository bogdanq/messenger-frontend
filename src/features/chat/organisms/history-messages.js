import React from 'react'
import styled from 'styled-components'
import { MessagesArea, DialogInfo } from '.'
import { ParentScroll, ScrollBlock } from '../../../ui/atoms'
import { Container } from '../../../ui/template'
import { useDropdown } from '../../../hooks/useDropdown'

export const HistoryMessages = () => {
  const [opened, toggle] = useDropdown()

  return (
    <MessagesWrapper>
      <Container>
        <MessagesHeader toggle={toggle} />
      </Container>
      <ParentScroll>
        <ScrollBlock width='100%'>
          <MessagesArea />
        </ScrollBlock>
        {opened && (
          <ScrollBlock width='30%'>
            <DialogInfo />
          </ScrollBlock>
        )}
      </ParentScroll>
      <Container>
        <SendMessageBlock />
      </Container>
    </MessagesWrapper>
  )
}

const MessagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MessagesHeader = ({ toggle }) => {
  return (
    <HeaderWrapper>
      <h1>Header</h1>
      <button onClick={toggle}>toggle site bar</button>
    </HeaderWrapper>
  )
}

const SendMessageBlock = () => {
  return (
    <SendWrapper>
      <h1>Send</h1>
    </SendWrapper>
  )
}

const HeaderWrapper = styled.div`
  min-height: 80px;
  border: 1px solid red;
`

const SendWrapper = styled.div`
  min-height: 50px;
  border: 1px solid red;
`
