import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { UniversalField } from '../../../ui/molecules'

const initialValues = {
  search: '',
}

const validationSchema = yup.object().shape({
  search: yup.string().required('Поле логин обязательно'),
})

export const SearchForm = () => {
  return (
    <SearchFormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={v => console.log('qwd', v)}
      >
        {({ values }) => {
          return (
            <Form>
              <Field
                icon={Search}
                name='search'
                type='text'
                inputType='search'
                label='Поиск'
                component={UniversalField}
              />
            </Form>
          )
        }}
      </Formik>
    </SearchFormWrapper>
  )
}

const SearchFormWrapper = styled.div`
  background: #f7f8f9;
  padding: 35px 5px 0px 10px;
  border-top: 1px solid #f2efea;
`
