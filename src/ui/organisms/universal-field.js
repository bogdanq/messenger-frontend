import React from 'react'
import { Col, TextField} from '../atoms'

export const FieldUniversal = ({ type, children, field, label, ...rest }) => {
  const error =
  rest.form.submitCount > 0 && (rest.form.errors[field.name]);
  let component = <TextField error={error} rest={rest} field={field} label={label}/>

  switch (type) {
    case 'select':
      component = 'select'
      break
    case 'password':
      component = <TextField type='password' error={error} rest={rest} field={field} label={label}/>
      break
    default:
      component = <TextField error={error} rest={rest} field={field} label={label}/>
      break
  }

  return (
    <Col>
      {component}
      {component === 'input' && children}
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
    </Col>
  )
}

