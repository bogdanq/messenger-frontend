import styled, { css } from 'styled-components'

const generateGradient = name => {
  if (name) {
    return css`
      background: linear-gradient(135deg, #00b3ff 0%, #9ceeff 100%);
      color: #fff;
      font-weight: 500;
      border: none;
    `
  }
}

export const ProfileImg = styled.div`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  background: #fff;
  padding: 5px;
  border: 1px solid #000;
  overflow: hidden;
  text-align: center;
  line-height: 43px;
  position: relative;
  font-size: 1.2rem;
  ${({ user }) => generateGradient(user)}
  & img,
  svg {
    width: 100%;
    height: 100%;
  }
`
