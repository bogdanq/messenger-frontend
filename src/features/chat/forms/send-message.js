import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import { UniversalField } from '../../../ui/molecules'

const initialValues = {
  sendMessage: '',
}

const validationSchema = yup.object().shape({
  sendMessage: yup.string().required('Поле логин обязательно'),
})

export const SendForm = () => {
  return (
    <SendFormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={v => console.log('qwd', v)}
      >
        {({ values }) => {
          return (
            <Form>
              <Field
                name='sendMessage'
                type='textarea'
                label='Write a message'
                inputType='sendMessage'
                component={UniversalField}
              />
            </Form>
          )
        }}
      </Formik>
    </SendFormWrapper>
  )
}

const SendFormWrapper = styled.div`
  padding-top: 0px;
`
