import React from 'react'
import { MessagesArea } from '../features/chat-area'
import { UserGroup } from '../features/user-groups'
import { ChatTemplate } from '../templates/chat-template'

export const Chat = () => (
  <ChatTemplate
    messagesArea={() => <MessagesArea />}
    userGroups={() => <UserGroup />}
  />
)
