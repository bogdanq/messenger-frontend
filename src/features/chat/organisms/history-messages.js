import React from 'react'
import { MessagesArea, CurrentDialogInfo } from '.'
import { HistoryMessageTemplate } from '../templates/history-template'

export const HistoryMessages = () => {
  return (
    <HistoryMessageTemplate
      messages={MessagesArea()}
      groupInfo={CurrentDialogInfo()}
    />
  )
}
