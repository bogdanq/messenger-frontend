import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { Email } from 'styled-icons/material/Email'
import { Lock } from 'styled-icons/boxicons-regular/Lock'
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
    <AuthTemplate
      text='Зарегистрируйтесь в два клика!'
      link={() => <a href='123'>Регистрация</a>}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={v => console.log('qwd', v)}
      >
        {({ values }) => {
          return (
            <Form>
              <Field
                icon={Email}
                name='firstname'
                type='text'
                label='Логин'
                component={FieldUniversal}
              />
              <Field
                icon={Lock}
                name='password'
                type='password'
                label='Пароль'
                component={FieldUniversal}
              />
              <CenterContent>
                <Button type='submit'>Авторизоваться</Button>
              </CenterContent>
            </Form>
          )
        }}
      </Formik>
    </AuthTemplate>
  )
}
