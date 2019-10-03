import React from 'react'
import { DialogsList } from '.'
import { Profile, FavoriteDialogs } from '../molecules'
import { SearchForm } from '../forms'

export const DialogsContainer = () => {
  return (
    <>
      <>
        <Profile />
        <SearchForm />
        <FavoriteDialogs />
        <DialogsList />
      </>
    </>
  )
}
