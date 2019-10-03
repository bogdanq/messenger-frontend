import React from 'react'
import styled from 'styled-components'

export const DialogInfo = ({ refDialogInfo }) => (
  <DialogInfoWrapper ref={refDialogInfo}>
    <h1>DialogInfo</h1>
  </DialogInfoWrapper>
)

const DialogInfoWrapper = styled.div`
  width: 30%;
  border: 1px solid red;
`
