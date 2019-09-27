import React from 'react'
import styled from 'styled-components'
import formBg from '../../../assets/form_bg1.jpg'
import { Container } from '../../../ui/template'
import { Col, Title, RegularText } from '../../../ui/atoms'

export const AuthTemplate = ({ children, text, link }) => (
  <AuthWrapper>
    <FormWrapper>
      <Title>Добро пожаловать!</Title>
      <Col>
        <Container>{children}</Container>
        <RegularText>{text}</RegularText>
        <RegularText>{link()}</RegularText>
      </Col>
    </FormWrapper>
  </AuthWrapper>
)

const FormWrapper = styled.div`
  width: 420px;
  background-color: #fff;
  box-shadow: 0 12px 32px -6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 0;
  & form {
    min-height: 240px;
    padding: 10px 48px;
  }
`

const AuthWrapper = styled.div`
  display: block;
  min-height: 100vh;
  align-items: center;
  background-image: url(${formBg});
  background-size: cover;
  background-position: 50%;
`
