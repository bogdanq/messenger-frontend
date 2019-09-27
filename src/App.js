import React from 'react'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { GlobalStyles } from './global-styles'

export const App = () => {
  return (
    <>
      <SignIn />
      <GlobalStyles />
    </>
  )
}
