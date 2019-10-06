import styled, { css } from 'styled-components'
import { WithTag, mixins, ifProps } from '../../lib/styled-components-layout'

export const Row = styled(WithTag)`
  display: flex;
  flex-direction: row;
  ${mixins}
  ${ifProps(
    'height',
    css`
      height: ${props => props.height};
    `,
  )}
`
