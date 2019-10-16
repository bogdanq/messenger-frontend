import React from 'react'
import styled, { css } from 'styled-components'
import { NotificationsNone } from 'styled-icons/material/NotificationsNone'
import { Video } from 'styled-icons/boxicons-regular/Video'
import { FileBlank } from 'styled-icons/boxicons-regular/FileBlank'
import { KeyboardVoice } from 'styled-icons/material/KeyboardVoice'
import { Group } from 'styled-icons/boxicons-regular/Group'
import { Delete } from 'styled-icons/feather/Delete'
import { Block } from 'styled-icons/boxicons-regular/Block'
import { Basket } from 'styled-icons/boxicons-regular/Basket'
import { Edit } from 'styled-icons/boxicons-regular/Edit'
import { Checkbox } from 'semantic-ui-react'
import { Row, DialogIcon, RegularText, Col } from '../../../ui/atoms'
import { Container } from '../../../ui/template'
import { ifProps } from '../../../lib/styled-components-layout'
import { useDropdown } from '../../../hooks/useDropdown'

const reducer = (_, payload) => {
  switch (payload.type) {
    case 'SHARED_VIDEO':
      return {
        isOpen: true,
        name: 'video',
      }
    case 'SHARED_FILES':
      return {
        isOpen: true,
        name: 'files',
      }
    case 'SHARED_VOICE':
      return {
        isOpen: true,
        name: 'voice',
      }
    case 'SHARED_GROUP':
      return {
        isOpen: true,
        name: 'groups',
      }
    case 'CLOSE':
      return {}
    default:
      return {}
  }
}

export const DialogInfo = () => {
  const [state, dispatch] = React.useReducer(reducer, {})

  return (
    <Row>
      <Container justify='space-between'>
        <DialogInfoWrapper>
          <h2>Информация о пользователе</h2>
          <DialogInfoHeader />
          <DialogInfoDescription />
          <NotificationSettings />
          <SharedMedia dispatch={dispatch} />
          <MembersList />
          <DialogActions />
        </DialogInfoWrapper>

        <DialogInfoHideBlock isOpen={state.isOpen}>
          <h2>{state.name}</h2>
          <button onClick={() => dispatch({ type: 'CLOSE' })}>close</button>
        </DialogInfoHideBlock>
      </Container>
    </Row>
  )
}

const DialogInfoWrapper = styled.div`
  height: 100%;
  min-width: 310px;
  padding: var(--global-padding);
  border-right: 1px solid #f2efea;
`

const DialogInfoHideBlock = styled.div`
  height: 100%;
  background: red;
  min-width: 310px;
  transition: all 0.5s;
  position: absolute;
  right: -350px;
  z-index: 10;
  ${ifProps(
    'isOpen',
    css`
      top: 0%;
      right: 0;
    `,
  )};
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
  margin-top: 20px;
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
  width: 100%;
  overflow: hidden;
  padding: 15px 0;
  margin: 15px 0;
  position: relative;
  border-bottom: 1px solid #9042d6;
  & svg {
    color: #9042d6;
    width: 30px;
  }
`

const SharedMedia = ({ dispatch }) => {
  return (
    <DialogSectionWrapper>
      <IconedListItem handleClick={() => dispatch({ type: 'SHARED_VIDEO' })}>
        <Video />
        <RegularText>752 видео</RegularText>
      </IconedListItem>
      <IconedListItem handleClick={() => dispatch({ type: 'SHARED_FILES' })}>
        <FileBlank />
        <RegularText>320 файлов</RegularText>
      </IconedListItem>
      <IconedListItem handleClick={() => dispatch({ type: 'SHARED_VOICE' })}>
        <KeyboardVoice />
        <RegularText>12 голосовых сообщений</RegularText>
      </IconedListItem>
      <IconedListItem handleClick={() => dispatch({ type: 'SHARED_GROUP' })}>
        <Group />
        <RegularText>30 общих групп</RegularText>
      </IconedListItem>
    </DialogSectionWrapper>
  )
}

const MembersList = () => {
  return <DialogSectionWrapper>MembersList</DialogSectionWrapper>
}

const NotificationSettings = () => {
  const [isChecked, toggle] = useDropdown(null, true)

  return (
    <IconedListItem handleClick={toggle}>
      <NotificationsNone color='#9042d6' width='30px' />
      <RegularText>Уведомления</RegularText>
      <Checkbox toggle checked={isChecked} />
    </IconedListItem>
  )
}

const IconedListItem = ({ children, handleClick }) => {
  return (
    <IconedListItemWrapper hover onClick={handleClick}>
      <Row>
        <Container align='center'>{children}</Container>
      </Row>
    </IconedListItemWrapper>
  )
}

const DialogActions = () => {
  return (
    <DialogSectionWrapper>
      <IconedListItem>
        <Edit />
        <RegularText>редактировать контакт</RegularText>
      </IconedListItem>
      <IconedListItem>
        <Delete />
        <RegularText>удалить контакс</RegularText>
      </IconedListItem>
      <IconedListItem>
        <Basket />
        <RegularText>очистить историю</RegularText>
      </IconedListItem>
      <IconedListItem>
        <Block />
        <RegularText>блокировать</RegularText>
      </IconedListItem>
    </DialogSectionWrapper>
  )
}

const IconedListItemWrapper = styled.div`
  min-height: 60px;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.5s;
  display: grid;
  & ${RegularText} {
    margin: 0 30px;
  }
  ${ifProps(
    'hover',
    css`
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid #38c8ff;
      }
    `,
  )};
`
