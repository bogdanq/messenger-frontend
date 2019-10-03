import React from 'react'
import {
  ChatTemplate,
  DialogsContainer,
  HistoryMessages,
} from '../features/chat'

export const ChatPage = () => (
  <ChatTemplate userGroups={DialogsContainer} messagesArea={HistoryMessages} />
)
