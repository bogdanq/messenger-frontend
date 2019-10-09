import React from 'react'
import styled from 'styled-components'
import { Sidebar } from 'styled-icons/feather/Sidebar'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { Menu } from 'styled-icons/feather/Menu'
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
import { Button } from '../../../ui/molecules'
import { useDropdown } from '../../../hooks/useDropdown'
import { SendForm } from '../forms'

export const HistoryMessages = () => {
  const [opened, toggle] = useDropdown()

  return (
    <MessagesWrapper>
      <Container>
        <MessagesHeader toggle={toggle} hasOpenedDialog={opened} />
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

const MessagesHeader = ({ toggle, hasOpenedDialog }) => {
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
            <Button
              onClick={toggle}
              icon={Sidebar}
              buttonType='header'
              active={hasOpenedDialog}
            />
            <Button icon={Search} buttonType='header' />
            <Button icon={Menu} buttonType='header' />
          </Row>
        </Container>
      </Row>
    </HeaderWrapper>
  )
}

const SendMessageBlock = () => {
  return (
    <SendWrapper>
      <SendForm />
    </SendWrapper>
  )
}

const HeaderWrapper = styled.div`
  min-height: 50px;
  border: 1px solid #f2efea;
  padding: var(--global-padding);
  ${Row} {
    & > button + button {
      margin-left: 1rem;
    }
  }
`

const SendWrapper = styled.div`
  min-height: 50px;
  border: 1px solid #f2efea;
  padding: var(--global-padding);
`
