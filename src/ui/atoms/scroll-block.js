import styled, { css } from 'styled-components'
import { ifProps, getStyle } from '../../lib/styled-components-layout'

export const ParentScroll = styled.div`
  display: flex;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
`
const transformTypes = {
  margin: css`
    margin-right: -500px;
  `,
}

export const ScrollBlock = styled.div`
  overflow-y: auto;
  width: 100%;
  width: ${({ width }) => width && width};
  transition: all 0.5s;
  ${getStyle('transform', transformTypes)}
  ${ifProps(
    'isVisible',
    css`
      margin-right: 0;
    `,
  )}
`
