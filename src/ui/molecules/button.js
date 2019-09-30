import React from 'react'
import styled, { css } from 'styled-components'
import { RoundSpinner } from '../atoms'
import { ifProps, getStyle } from '../../lib'

export const Button = ({
  disabled,
  loading,
  type = 'button',
  children,
  size,
  color,
  view,
  icon: Icon,
}) => {
  return (
    <>
      <ButtonStyles
        size={size}
        loading={loading}
        disabled={disabled}
        color={color}
        type={type}
        view={view}
      >
        {Icon && (
          <IconedStyle>
            <Icon />
          </IconedStyle>
        )}
        {children}
        {loading && <RoundSpinner />}
      </ButtonStyles>
    </>
  )
}

const buttonSize = {
  mini: '50px',
  small: '150px',
  large: '300px',
}

const buttonColor = {
  primary: css`
    background: red;
    color: #fff;
  `,
}

const ButtonStyles = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  )};
  width: ${getStyle('size', buttonSize)};
  ${getStyle('color', buttonColor)};
  &:disabled {
    opacity: 0.6;
    box-shadow: 0 6px 11px 0 rgba(198, 199, 200, 0.6);
    cursor: not-allowed;
  }
`

const IconedStyle = styled.div`
  transform: translateX(-5px);
  width: calc(16px + 5px);
  color: #9042d6;
  height: auto;
  display: flex;
  flex-direction: column;
`
