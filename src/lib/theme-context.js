import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext()
export const CustomThemeProvider = ({ children, themes, initialTheme }) => {
  const [theme, setTheme] = React.useState(themes[initialTheme])

  const themeSetter = React.useCallback(
    themeName => {
      if (themes[themeName]) {
        setTheme(themes[themeName])
      }
    },
    [themes],
  )

  return (
    <ThemeContext.Provider
      values={{
        themeSetter,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
