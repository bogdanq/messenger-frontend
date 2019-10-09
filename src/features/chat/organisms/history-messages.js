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
  const [openDialogInfo, setOpenDialogInfo] = useDropdown()

  return (
    <MessagesWrapper>
      <Container>
        <MessagesHeader
          setOpenDialogInfo={setOpenDialogInfo}
          openDialogInfo={openDialogInfo}
        />
      </Container>
      <ParentScroll>
        <ScrollBlock width='100%'>
          <MessagesArea />
        </ScrollBlock>
        {openDialogInfo && (
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

const MessagesHeader = ({ setOpenDialogInfo, openDialogInfo }) => {
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
              onClick={setOpenDialogInfo}
              icon={Sidebar}
              buttonType='header'
              active={openDialogInfo}
            />
            <Button icon={Search} buttonType='header' />
            <WithDropDown
              render={() => (
                <h1 style={{ position: 'absolute' }}>
                  Выпадашка абсолютом высчитать от текущего места
                </h1>
              )}
            >
              {(open, isOpen) => (
                <Button
                  onClick={open}
                  icon={Menu}
                  buttonType='header'
                  active={isOpen}
                />
              )}
            </WithDropDown>
          </Row>
        </Container>
      </Row>
    </HeaderWrapper>
  )
}

const WithDropDown = ({ children, render }) => {
  const ref = React.useRef(null)
  const [opened, toogle] = useDropdown(ref)

  return (
    <div ref={opened ? ref : null}>
      {children(toogle, opened)}
      {opened && <div>{render(toogle)}</div>}
    </div>
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
