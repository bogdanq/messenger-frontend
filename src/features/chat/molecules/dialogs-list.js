import React from 'react'
import styled from 'styled-components'
import { People } from 'styled-icons/material/People'
// import Truncate from 'react-truncate'
import { ConditionalList } from '../../../ui/organisms'
import { Row, RegularText, ProfileImg, Col } from '../../../ui/atoms'
import { Container } from '../../../ui/template'

export const DialogsList = ({ list, renderEmpty }) => (
  <ConditionalList
    data={list}
    renderEmpty={renderEmpty}
    renderExists={list =>
      list.map((item, index) => <DialogsListItem key={index} item={item} />)
    }
  />
)

const DialogsListItem = ({ index, item }) => (
  <DialogWrapper>
    <Row>
      <Container justify='space-between' align='center'>
        <Row align='center'>
          <ProfileImg>
            <People width='100%' />
          </ProfileImg>
          <MessageWrap>
            <RegularText type='user_name' transform='truncate'>
              bogdan
            </RegularText>
            <RegularText type='message' transform='truncate'>
              <i>Oleg:</i>some messages lorem ipsum
            </RegularText>
          </MessageWrap>
        </Row>
        <Col>
          <RegularText>17:59</RegularText>
          <RegularText type='unread_messages' transform='truncate'>
            12
          </RegularText>
          <DialogUnread />
        </Col>
      </Container>
    </Row>
  </DialogWrapper>
)

const MessageWrap = styled.div`
  color: #000;
  margin: 0 5px;
  margin-left: 15px;
  max-width: 180px;
  width: 100%;
`

const DialogUnread = styled.div`
  background: #c1d6e5;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 12px;
  transition: all 0.5s;
`

const DialogWrapper = styled.div`
  margin-top: 5px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.5s;
  &:hover {
    background: #f2efea;
  }
  & ${Container} {
    min-height: 60px;
  }
`
