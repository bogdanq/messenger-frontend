import styled from 'styled-components'
import { WithTag, mixins } from '../../lib/styled-components-layout'

export const Col = styled(WithTag)`
  display: flex;
  flex-direction: column;
  ${mixins}
`