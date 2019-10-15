import React from 'react'
import styled from 'styled-components'
import { Row, DialogIcon, RegularText, Col } from '../../../ui/atoms'
import { Container } from '../../../ui/template'

export const DialogInfo = () => (
  <DialogInfoWrapper>
    <DialogInfoHeader />
    <DialogInfoDescription />
    <NotificationSettings />
    <SharedMedia />
    <MembersList />
    <DialogActions />
  </DialogInfoWrapper>
)

const DialogInfoWrapper = styled.div`
  height: 100%;
  padding: var(--global-padding);
  border-right: 1px solid #f2efea;
`

export const DialogInfoHeader = () => {
  return (
    <HeaderWrapper>
      <Row>
        <Container justify='space-around' align='center'>
          <DialogIcon user='rm'>R M</DialogIcon>
          <Col>
            <Container align='flex-start'>
              <h2>Roy D. Miranda</h2>
              <RegularText>last seen 20 minutes ago</RegularText>
            </Container>
          </Col>
        </Container>
      </Row>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  min-height: 70px;
  width: 100%;
  max-width: 250px;
  display: flex;
  transition: all 0.2s;
  text-align: left;
  & > ${Row} {
    width: 100%;
  }
`
const DialogInfoDescription = () => {
  return (
    <DialogSectionWrapper>
      <pre>
        <h2>Описание</h2>
        <RegularText>
          {
            'Тестовое описание \nТестовое описание \nТестовое описание \nТестовое описание \nТестовое описание \n'
          }
        </RegularText>
      </pre>
    </DialogSectionWrapper>
  )
}
const DialogSectionWrapper = styled.div`
  min-height: 70px;
  width: 100%;
  overflow: hidden;
  padding: 15px 0;
  border-bottom: 2px solid #f2efea;
`

const SharedMedia = () => {
  return (
    <DialogSectionWrapper>
      SharedMedia edit user/delete/clear history/ block
    </DialogSectionWrapper>
  )
}

const MembersList = () => {
  return <DialogSectionWrapper>MembersList</DialogSectionWrapper>
}

const NotificationSettings = () => {
  return <DialogSectionWrapper>NotificationSettings</DialogSectionWrapper>
}

const DialogActions = () => {
  return <DialogSectionWrapper>DialogActions</DialogSectionWrapper>
}
