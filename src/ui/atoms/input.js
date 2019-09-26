import React from 'react'
import styled, { css } from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import { ifProps } from '../../lib/styled-components-layout'

export const TextField = ({ rest, field, label, error, type = 'text' }) => {
  const [open, setOpen] = React.useState(false)
  const inputRef = React.useRef(null)
  const toogleOpen = isOpen => {
    if (field.value.length === 0) {
      return setOpen(isOpen)
    }
  }

  useOnClickOutside(inputRef, () => toogleOpen)

  return (
    <InputPositionConyainer>
      <InputStyles error={error}>
        <Input
          ref={inputRef}
          {...rest}
          {...field}
          type={type}
          onFocus={() => toogleOpen(true)}
          onBlur={() => toogleOpen(false)}
          autoComplete='off'
        />
        <InputLabel open={open}>{label}</InputLabel>
      </InputStyles>
    </InputPositionConyainer>
  )
}

const Input = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: var(--input-font-size);
  color: var(--input-text-color);
  line-height: var(--input-line-height);
  box-sizing: border-box;
  width: 100%;
  min-height: var(--input-height);
  letter-spacing: -0.3px;
  resize: none;
`

const InputStyles = styled.div`
  --input-placeholder-font-size: var(--input-font-size);
  --input-placeholder-line-height: var(--input-line-height);
  --input-border-size: var(--border-size);
  border-bottom: var(--input-border-size) solid var(--input-border-color);
  margin-bottom: 25px;
  & input:focus {
    border-bottom: var(--input-border-size) solid
      var(--input-border-color-secondary);
  }
  ${ifProps(
    'error',
    css`
      border-bottom: var(--input-border-size) solid
        var(--input-border-color-primary);
      margin-bottom: 5px;
      & label {
        color: var(--text-color-primary);
      }
    `,
  )}
`

const InputPositionConyainer = styled.div`
  position: relative;
`

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
      transform: translateY(-25px);
      font-size: calc(var(--input-placeholder-font-size) - 2px);
    `,
  )}
  cursor: text;
  letter-spacing: -0.25px;
`
