import styled from 'styled-components'
import { WithTag, mixins } from '../../lib/styled-components-layout'

export const Row = styled(WithTag)`
  display: flex;
  flex-direction: row;
  ${mixins}
`