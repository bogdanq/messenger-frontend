import React from 'react'

export const ConditionalList = ({
  data,
  renderExists,
  renderEmpty = () => null,
}) => <>{data && data.length > 0 ? renderExists(data) : renderEmpty()}</>
