import styled, { css } from 'styled-components'
import { ifProps } from '../../lib/styled-components-layout'

export const Positioner = styled.div`
  border: 1px solid red;
  padding: 15px;
  background: #fff;
  position: absolute;
  top: ${({ position }) => position && position.top}px;
  left: ${({ position }) => position && position.left}px;
  ${ifProps(
    'position',
    css`
      top: ${({ position }) => position.top}px;
      left: ${({ position }) => position.left}px;
    `,
  )}
`
