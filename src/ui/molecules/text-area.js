import React from 'react'
import styled, { css } from 'styled-components'
import { ifProps } from '../../lib/styled-components-layout'
import { Paperclip } from 'styled-icons/evil/Paperclip'
import { Smile } from 'styled-icons/boxicons-regular/Smile'
import { InputStyles, InputWrapper, Row } from '../atoms'
import { Container } from '../template'

export const TextAreaField = ({
  rest,
  field,
  error,
  disabled,
  placeholder,
}) => {
  return (
    <>
      <Row>
        <Container align='row'>
          <IconWrapper>
            <Paperclip />
          </IconWrapper>
          <TextAreaWrapper error={error}>
            <InputStyles
              placeholder={placeholder}
              {...rest}
              {...field}
              disabled={disabled}
              as='textarea'
            />
          </TextAreaWrapper>
          <IconWrapper>
            <Smile />
          </IconWrapper>
        </Container>
      </Row>
    </>
  )
}

const TextAreaWrapper = styled(InputWrapper)`
  border: none;
  position: relative;
  margin: 0 10px;
  padding: 0 10px;
  width: 100%;
  ${ifProps(
    'error',
    css`
      border: var(--input-border-size) solid var(--input-border-color-primary);
    `,
  )}
`

const IconWrapper = styled.div`
  width: 40px;
  color: #b4b4b4;
  cursor: pointer;
`
