import React from 'react'
import styled from 'styled-components'
import { People } from 'styled-icons/material/People'
import Truncate from 'react-truncate'
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
          <InfoBlock>
            <RegularText type='userName'>
              <Truncate lines={1} ellipsis='...'>
                bogdan Shelomanov Aleksandrovich
              </Truncate>
            </RegularText>
            <RegularText type='message'>
              <i>Oleg:</i>
              <Truncate lines={1} ellipsis='...'>
                some messages
              </Truncate>
            </RegularText>
          </InfoBlock>
        </Row>
        <Col>
          <RegularText>17:59</RegularText>
          <DialogUnread />
          <RegularText type='unreadMessages'>123123</RegularText>
        </Col>
      </Container>
    </Row>
  </DialogWrapper>
)

const InfoBlock = styled.div`
  color: #000;
  margin: 0 5px;
  margin-left: 15px;
  max-width: 70%;
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
    background: #dfdeda;
  }
  & ${Container} {
    min-height: 60px;
  }
`
