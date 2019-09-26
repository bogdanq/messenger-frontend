import React from 'react'
import styled, { css } from'styled-components' 
import useOnClickOutside from 'use-onclickoutside'
import { ifProps } from '../../lib/styled-components-layout'

export const TextField = ({ rest, field, label, error, type='text' }) => {
  const [open, toggleOpen] = React.useState(false)
  const inputRef = React.useRef(null)
  useOnClickOutside(inputRef, () => {
    if(field.value.length === 0) {
      toggleOpen(false)
    }
  })

  return (
    <InputPositionConyainer ref={inputRef}>
      <InputStyles onClick={() => toggleOpen(true)} error={error}>
        <Input {...rest} {...field} autocomplete="off" type={type}/>
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
  letter-spacing: -.3px;
  resize: none;
`

const InputStyles = styled.div`
  --input-placeholder-font-size: var(--input-font-size);
  --input-placeholder-line-height: var(--input-line-height);
  --input-border-size: var(--border-size);
  border-bottom: var(--input-border-size) solid var(--input-border-color);
  margin-bottom: 25px;
  & input:focus {
    border-bottom: var(--input-border-size) solid var(--input-border-color-secondary)
  }
  ${ifProps(
    'error',
    css`
      border-bottom: var(--input-border-size) solid var(--input-border-color-primary);
      margin-bottom: 5px;
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
    transition: .2s;
    ${ifProps(
      'open',
      css`
        transform: translateY(-25px);
        font-size: calc(var(--input-placeholder-font-size) - 2px);
      `,
    )}
    cursor: text;
    letter-spacing: -.25px;
`
