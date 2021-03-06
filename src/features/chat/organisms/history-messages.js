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
  Positioner,
} from '../../../ui/atoms'
import { Container } from '../../../ui/template'
import { Button, WithDropDown } from '../../../ui/molecules'
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

        <ScrollBlock isVisible={!openDialogInfo} transform='margin'>
          <DialogInfo />
        </ScrollBlock>
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
              popper={position => (
                <Positioner position={position}>
                  Выпадашка абсолютом высчитать от текущего места
                </Positioner>
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
    & button {
      margin-left: 1rem;
    }
  }
`

const SendWrapper = styled.div`
  min-height: 50px;
  border: 1px solid #f2efea;
  padding: var(--global-padding);
`
