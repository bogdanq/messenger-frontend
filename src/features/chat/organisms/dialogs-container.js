import React from 'react'
import { DialogsList, FavoriteDialogs } from '.'
import { Profile } from '../molecules'
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
