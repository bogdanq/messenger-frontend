import React from 'react'
import { useDropdown } from '../../hooks/useDropdown'

export const WithDropDown = ({ children, popper }) => {
  const wrapperRef = React.useRef(null)
  const [opened, toogle] = useDropdown(wrapperRef)
  const [position, setPosition] = React.useState(null)

  React.useLayoutEffect(() => {
    if (wrapperRef.current) {
      const wrapper = wrapperRef.current.getBoundingClientRect()
      const newPostion = {
        top: wrapper.top + (wrapper.height + 20),
        left: wrapper.left - (420 - wrapper.width),
      }
      setPosition(newPostion)
    }
  }, [opened])

  return (
    <div ref={opened ? wrapperRef : null}>
      {children(toogle, opened)}
      {opened && <div>{popper(position)}</div>}
    </div>
  )
}
