import React from 'react'
import styled from 'styled-components'
import { Row, HorizonScroll } from '../../../ui/atoms'
import { Container } from '../../../ui/template'
import { FavoriteDialogsList } from '../molecules'

const list = ['BS', 'OA']

export const FavoriteDialogs = () => {
  return (
    <FavoriteDialogsWrapper>
      <HorizonScroll>
        <Row>
          <Container align='center'>
            <FavoriteDialogsList
              list={list}
              renderEmpty={() => <h2>Добавляйте диалоги</h2>}
            />
          </Container>
        </Row>
      </HorizonScroll>
    </FavoriteDialogsWrapper>
  )
}

const FavoriteDialogsWrapper = styled.div`
  height: 100px;
  display: flex;
  padding: 0 10px;
  padding-bottom: 20px;
  background: #f7f8f9;
  border-top: 1px solid #f2efea;
`
