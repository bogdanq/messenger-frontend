import React from 'react'
import styled, { css } from 'styled-components'
import { TriangleDown } from 'styled-icons/octicons/TriangleDown'
import { Row, ProfileImg } from '../../../ui/atoms'
import { Container } from '../../../ui/template'
import { ifProps } from '../../../lib/styled-components-layout'

export const Profile = () => {
  const [opened, toggle] = React.useReducer(prev => !prev, false)

  return (
    <ProfileWrapper opened={opened} onClick={toggle}>
      <Row>
        <Container justify='space-around' align='center'>
          <ProfileImg user='rm'>R M</ProfileImg>
          <h2>Roy D. Miranda</h2>
          <TriangleDown />
        </Container>
      </Row>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  min-height: 70px;
  max-width: 220px;
  display: flex;
  padding-left: 10px;
  transition: all 0.2s;
  & svg {
    width: 15px;
    color: #0c8fe4;
    transition: all 0.2s;
  }
  ${ifProps(
    'opened',
    css`
      & svg {
        transform: rotateX(180deg);
      }
    `,
  )}
  cursor: pointer;
  & > ${Row} {
    width: 100%;
  }
`
