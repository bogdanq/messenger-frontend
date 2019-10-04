import React from 'react'
import styled from 'styled-components'
import { Row } from '../../../ui/atoms'
import { Container } from '../../../ui/template'

export const Profile = () => {
  return (
    <ProfileWrapper>
      <Row>
        <Container justify='space-around' align='center'>
          <h2>IMG</h2>
          <h2>Roy D. Miranda</h2>
          <h2>></h2>
        </Container>
      </Row>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  min-height: 50px;
  max-width: 200px;
  display: flex;
  padding-left: 10px;
`
