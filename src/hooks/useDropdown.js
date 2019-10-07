import React from 'react'
import useOnClickOutside from 'use-onclickoutside'

export const useDropdown = (ref, initialState) => {
  const [opened, toggle] = React.useReducer(prev => !prev, initialState)
  useOnClickOutside(ref ? ref : '', toggle)

  return [opened, toggle]
}
