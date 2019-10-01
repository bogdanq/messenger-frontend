import React from 'react'
import useOnClickOutside from 'use-onclickoutside'

export const useDropdown = ref => {
  const [opened, toggle] = React.useReducer(prev => !prev, false)
  useOnClickOutside(ref ? ref : '', toggle)

  return [opened, toggle]
}
