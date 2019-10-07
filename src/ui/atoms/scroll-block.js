import styled from 'styled-components'

export const ParentScroll = styled.div`
  display: flex;
  overflow-y: auto;
  height: 100%;
`

export const ScrollBlock = styled.div`
  overflow-y: auto;
  width: 100%;
  width: ${({ width }) => width && width};
`
