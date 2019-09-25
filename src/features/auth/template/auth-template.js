import styled from 'styled-components'

export const AuthTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  background-color: #fff;
  box-shadow: 0 12px 32px -6px rgba(0,0,0,.2);
  border-radius: 10px;
  & form {
    min-height: 380px;
    padding: 32px 48px;
  }
`