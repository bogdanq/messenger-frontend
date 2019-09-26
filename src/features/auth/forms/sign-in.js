import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { AuthTemplate } from '../template/auth-template'
import { FieldUniversal } from '../../../ui/organisms'
import { CenterContent } from '../../../ui/template'
import { Button } from '../../../ui/atoms'

const initialValues = {
  firstname: '',
  password: '',
}

const validationSchema = yup.object().shape({
  firstname: yup.string().required('Поле логин обязательно'),
  password: yup.string().required('Поле пароль обязательно'),
})

export const LoginForm = () => {
  return (
    <AuthTemplate>
      <h1>Добро пожаловать в чат!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={v => console.log('submit', v)}
      >
        {({ values }) => {
          return (
            <Form>
              <Field
                name='firstname'
                type='text'
                label='Логин'
                component={FieldUniversal}
              />
              <Field
                name='password'
                type='password'
                label='Пароль'
                component={FieldUniversal}
              />
              <CenterContent>
                <Button type='submit' />
              </CenterContent>
            </Form>
          )
        }}
      </Formik>
    </AuthTemplate>
  )
}
