import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { AuthTemplate } from '../template/auth-template'
import { CenterContent } from '../../../ui/template'
import { Button, UniversalField } from '../../../ui/molecules'

const initialValues = {
  firstname: '',
  lastname: '',
  password: '',
  repeatPassword: '',
}

const validationSchema = yup.object().shape({
  firstname: yup.string().required('Поле имя обязательно'),
  lastname: yup.string().required('Поле фамилия обязательно'),
  password: yup.string().required('Поле пароль обязательно'),
  repeatPassword: yup.string().required('Поле пароль обязательно'),
})

export const AuthForm = () => {
  return (
    <AuthTemplate text='Есть аккаунт?' link={() => <a href='123'>Войти</a>}>
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
                label='Введите имя'
                component={UniversalField}
              />
              <Field
                name='lastname'
                type='text'
                label='Введите фамилию'
                component={UniversalField}
              />
              <Field
                name='password'
                type='text'
                label='Введите пароль'
                component={UniversalField}
              />
              <Field
                name='repeatPassword'
                type='text'
                label='Повторите пароль'
                component={UniversalField}
              />
              <CenterContent>
                <Button type='submit'>Зарегистрироваться</Button>
              </CenterContent>
            </Form>
          )
        }}
      </Formik>
    </AuthTemplate>
  )
}
