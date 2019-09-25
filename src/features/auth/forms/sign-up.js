import React from 'react'
import { Formik, Form, Field } from 'formik'
import { AuthTemplate } from '../template/auth-template'
import { FieldUniversal } from '../../../ui/organisms'

const initialValues = {
  firstname: '',
  lastname: '',
  password: '',
  repeatPassword: '',
}

export const AuthForm = () => {
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
                name="lastname"
                placeholder="lastName"
                type="text"
                label="Введите фамилию"
                component={FieldUniversal}
              />
              <Field 
                name="password"
                placeholder="password"
                type="text"
                label="Введите пароль"
                component={FieldUniversal}
              />
              <Field 
                name="repeatPassword"
                placeholder="repeat password"
                type="text"
                label="Повторите пароль"
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