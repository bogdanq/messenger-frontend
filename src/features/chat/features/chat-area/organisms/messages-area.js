import React from 'react'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import { Row } from '../../../../../ui/atoms'
import { Container } from '../../../../../ui/template'

export const MessagesArea = ({
  messagesArea = () => <h1>area for messages</h1>,
  groupInfo = () => <h1>group info</h1>,
}) => {
  const { component, render } = useDropdown(
    toggle => <button onClick={toggle}>OpenMenu</button>,
    menuRef => <GroupInfo ref={menuRef}>{groupInfo()}</GroupInfo>,
  )

  return (
    <AreaContainer>
      <AreaHeader>chat header {component}</AreaHeader>
      <Row>
        <Container>
          <MessageArea>{messagesArea()}</MessageArea>
          {render}
        </Container>
      </Row>
    </AreaContainer>
  )
}

const useDropdown = (component, render) => {
  const [opened, toggle] = React.useReducer(prev => !prev, false)
  const ref = React.useRef(null)
  useOnClickOutside(ref, toggle)

  return {
    component: component(toggle, opened),
    render: opened ? render(ref) : null,
  }
}

const AreaContainer = styled.div`
  border: 1px solid blue;
  width: 75%;
`

const AreaHeader = styled.div`
  border: 1px solid green;
  height: 50px;
`

const MessageArea = styled.div`
  border: 1px solid blue;
  width: 100%;
`
const GroupInfo = styled.div`
  border: 1px solid green;
  width: 30%;
`
