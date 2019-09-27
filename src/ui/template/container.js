import styled from 'styled-components'
import { WithTag, mixins } from '../../lib/styled-components-layout'

export const Container = styled(WithTag)`
  ${mixins}
  max-width: 1800px;
  width: 100%;
  display: inherit;
  flex: inherit;
  flex-flow: inherit;
  flex-direction: inherit;
  margin: 0 auto;
`
