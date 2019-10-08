import styled, { css } from 'styled-components'
import { getStyle } from '../../lib/styled-components-layout'

const textTransform = {
  truncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
}

export const Title = styled.h1`
  font-weight: 500;
  ${getStyle('transform', textTransform)}
`
