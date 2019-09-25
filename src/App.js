import React from 'react'
import { LoginForm } from './features/auth'
import { GlobalStyles } from './global-styles'

export const App = () => {
  return (
    <div className='App'>
      <h1>New app</h1>
      <LoginForm />
      <GlobalStyles />
    </div>
  )
}
