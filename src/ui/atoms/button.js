import React from 'react'
import styled from 'styled-components'

export const Button = ({ disabled, loading }) => {
  return <ButtonStyles disabled={disabled}>Авторизоваться</ButtonStyles>
}

const ButtonStyles = styled.button`
  border: none;
  outline: none;
  border-radius: 1000px;
  color: #9042d6;
  background-color: #f5eefb;
  font-size: 16px;
  padding: 8px 30px;
  line-height: 24px;
  box-sizing: border-box;
  letter-spacing: -0.5px;
  font-weight: 500;
  transition: box-shadow 0.5s linea;
  cursor: pointer;
  box-shadow: 0 5px 10px 0 rgba(198, 199, 200, 0.6);
  &:disabled {
    opacity: 0.6;
    box-shadow: 0 6px 11px 0 rgba(198, 199, 200, 0.6);
    cursor: not-allowed;
  }
`
