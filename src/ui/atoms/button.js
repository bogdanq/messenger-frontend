import React from 'react'
import styled, { css } from 'styled-components'
import { RoundSpinner } from './round-spinner'
import { ifProps } from '../../lib/styled-components-layout'

export const Button = ({ disabled, loading, type = 'button', children }) => {
  return (
    <>
      <ButtonStyles loading={loading} disabled={disabled} type={type}>
        {children}
      </ButtonStyles>
      {loading && <RoundSpinner />}
    </>
  )
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
  position: relative;
  ${ifProps(
    'loading',
    css`
      color: transparent;
    `,
  )}
  &:disabled {
    opacity: 0.6;
    box-shadow: 0 6px 11px 0 rgba(198, 199, 200, 0.6);
    cursor: not-allowed;
  }
`
