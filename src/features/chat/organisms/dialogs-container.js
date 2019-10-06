import React from 'react'
import styled from 'styled-components'
import { Dialogs, FavoriteDialogs } from '.'
import { Profile } from '../molecules'
import { SearchForm } from '../forms'

export const DialogsContainer = () => {
  return (
    <>
      <>
        <Profile />
        <SearchForm />
        <FavoriteDialogs />
        <ScrollBlock>
          <Dialogs />
        </ScrollBlock>
      </>
    </>
  )
}

const ScrollBlock = styled.div`
  overflow-y: scroll;
  height: calc(100% - 275px);
`
