import React from 'react'
import { DialogsList } from '.'
import { Profile, Search, FavoriteDialogs } from '../molecules'
import { DialogsTemplate } from '../templates/dailogs-template'

export const DialogsContainer = () => {
  return (
    <DialogsTemplate>
      <>
        <Profile />
        <Search />
        <FavoriteDialogs />
        <DialogsList />
      </>
    </DialogsTemplate>
  )
}
