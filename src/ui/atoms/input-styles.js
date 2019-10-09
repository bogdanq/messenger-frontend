import styled, { css } from 'styled-components'
import { ifProps, WithTag } from '../../lib/styled-components-layout'

export const InputStyles = styled(WithTag)`
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
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const InputWrapper = styled.div`
  --input-placeholder-font-size: var(--input-font-size);
  --input-placeholder-line-height: var(--input-line-height);
  --input-border-size: var(--border-size);
  border-bottom: var(--input-border-size) solid var(--input-border-color);
  margin-bottom: 30px;
  & input:focus {
    border-bottom: var(--input-border-size) solid
      var(--input-border-color-secondary);
  }
  ${ifProps(
    'error',
    css`
      border-bottom: var(--input-border-size) solid
        var(--input-border-color-primary);
    `,
  )}
`
