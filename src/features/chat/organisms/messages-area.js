import React from 'react'
import styled from 'styled-components'

export const MessagesArea = () => (
  <MessagesAreaWrapper>
    {[1, 2].map(() => (
      <h1>MessagesArea</h1>
    ))}
  </MessagesAreaWrapper>
)

const MessagesAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--global-padding);
  border: 1px solid #f2efea;
`
