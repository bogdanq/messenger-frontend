import React from 'react'
import styled from 'styled-components'
import { DialogsList } from '../molecules'

const list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

export const Dialogs = () => {
  return (
    <DialogsWrapper>
      <DialogsList
        list={list}
        renderEmpty={() => <h2>Добавляйте диалоги</h2>}
      />
    </DialogsWrapper>
  )
}

const DialogsWrapper = styled.div`
  overflow-y: auto;
`
