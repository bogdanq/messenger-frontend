import React from 'react'
import styled from 'styled-components'
import { MessagesArea, DialogInfo } from '.'
import {
  ParentScroll,
  ScrollBlock,
  Title,
  Row,
  Col,
  RegularText,
} from '../../../ui/atoms'
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
      <Row>
        <Container align='center' justify='space-between'>
          <Col>
            <Title transform='truncate'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Title>
            <RegularText>last seen 2 hours ago</RegularText>
          </Col>
          <Row>
            <button onClick={toggle}>toggle site bar</button>
            <button onClick={toggle}>Поиск</button>
            <button onClick={toggle}>Меню</button>
          </Row>
        </Container>
      </Row>
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
  background: linear-gradient(to bottom, #f8f7f3, #f2efea);
  padding: 25px 50px;
`

const SendWrapper = styled.div`
  min-height: 50px;
  border: 1px solid red;
`
