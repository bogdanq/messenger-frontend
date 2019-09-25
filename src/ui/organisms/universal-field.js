import React from 'react'
import { Input } from 'semantic-ui-react'
import { Col } from '../atoms'

export const FieldUniversal = ({ type, children, field, label, ...rest }) => {
  let component = <Input {...rest} {...field} />
  switch (type) {
    case 'select':
      component = 'select'
      break
    default:
      component = <Input {...rest} {...field} />
      break
  }

  return (
    <Col>
      {label && label}
      {component}
      {component === 'input' && children}
      <p style={{ color: 'red' }}>{rest.form.errors[field.name]}</p>
    </Col>
  )
}
