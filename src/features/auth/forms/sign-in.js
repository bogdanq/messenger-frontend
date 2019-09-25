import React from 'react'
import { Formik, Form, Field } from 'formik'
import { AuthTemplate } from '../template/auth-template'
import { FieldUniversal } from '../../../ui/organisms'

const initialValues = {
  firstname: '',
  password: '',
}

export const LoginForm = () => {
  return (
    <AuthTemplate>
      <Formik
        initialValues={initialValues}
        onSubmit={(v) => console.log('submit', v)}
      >
        {({ values }) => {
          return (
            <Form>
              <Field 
                name="firstname"
                placeholder="firstname"
                type="text"
                label="Введите имя"
                component={FieldUniversal}
              />
              <Field 
                name="password"
                placeholder="lastName"
                type="text"
                label="Введите пароль"
                component={FieldUniversal}
              />
              <button type='submit'>Войти</button>
            </Form>
          )
        }}
      </Formik>
    </AuthTemplate>
  )
}