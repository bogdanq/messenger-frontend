import React from 'react'
import styled, { css } from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import { ifProps, getStyle } from '../../lib/styled-components-layout'
import { InputStyles, InputWrapper } from '../atoms'

export const TextField = ({
  rest,
  field,
  label,
  error,
  type = 'text',
  disabled,
}) => {
  const [open, setOpen] = React.useState(false)
  const inputRef = React.useRef(null)
  const toogleOpen = isOpen => {
    if (field.value.length === 0) {
      return setOpen(isOpen)
    }
  }

  useOnClickOutside(inputRef, () => toogleOpen)

  return (
    <InputPosition {...rest} disabled={disabled}>
      <InputLabel open={open} onClick={() => inputRef.current.focus()}>
        {label}
      </InputLabel>
      {rest.icon && (
        <IconWrapper>
          <rest.icon />
        </IconWrapper>
      )}

      <InputWrapper error={error}>
        <InputStyles
          {...rest}
          {...field}
          type={type}
          onFocus={() => toogleOpen(true)}
          onBlur={() => toogleOpen(false)}
          ref={inputRef}
          disabled={disabled}
          as='input'
        />
      </InputWrapper>
    </InputPosition>
  )
}

const InputLabel = styled.label`
  font-size: var(--input-placeholder-font-size);
  line-height: var(--input-placeholder-line-height);
  color: var(--text-color-light);
  user-select: none;
  position: absolute;
  left: 0;
  top: 11px;
  transition: 0.1s;
  ${ifProps(
    'open',
    css`
      transform: translateY(-33px);
      font-size: calc(var(--input-placeholder-font-size) - 2px);
    `,
  )}
  cursor: text;
  letter-spacing: -0.25px;
`

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 11px;
  width: 20px;
  color: #b4b4b4;
`

const inputType = {
  search: css`
    & ${InputStyles} {
      background: #fff;
      border-radius: 17px;
      padding: 0 15px;
      color: #b4b4b4;
    }
    & ${InputLabel} {
      left: 20px;
      color: #b4b4b4;
    }
    & ${InputWrapper} {
      border-radius: 20px;
      border: 1px solid #b4b4b485;
      & input:focus {
        border-bottom: var(--input-border-size) solid transparent;
      }
    }
    & ${IconWrapper} {
      right: 20px;
    }
  `,
  sendMessage: css`
    ${InputWrapper} {
      border: none;
      margin: 0;
      & input:focus {
        border-bottom: var(--input-border-size) solid transparent;
      }
    }
  `,
}

const InputPosition = styled.div`
  position: relative;
  ${getStyle('inputType', inputType)}
  ${ifProps(
    'disabled',
    css`
      opacity: 0.5;
    `,
  )}
`
