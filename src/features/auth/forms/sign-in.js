import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { AuthTemplate } from '../template/auth-template'
import { FieldUniversal } from '../../../ui/organisms'

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
                placeholder='firstname'
                type='text'
                label='Введите имя'
                component={FieldUniversal}
              />
              <Field
                name='password'
                placeholder='lastName'
                type='text'
                label='Введите пароль'
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
