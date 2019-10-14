import styled, { css } from 'styled-components'
import { getStyle } from '../../lib/styled-components-layout'

const textStyle = {
  user_name: css`
    font-weight: 500;
    color: #000;
    text-align: left;
  `,
  message: css`
    text-align: left;
  `,
  unread_messages: css`
    background: #f46b6b;
    font-size: 11px;
    padding: 5px;
    border-radius: 11px;
    min-width: 21px;
    text-align: center;
    margin-top: 7px;
    color: #fff;
    font-weight: 500;
    padding: 0px 5px;
    max-width: 40px;
  `,
}

const textTransform = {
  truncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
}

export const RegularText = styled.p`
  display: block;
  font-size: 16px;
  color: #5a6e81;
  padding: 5px 0;
  transition: all 0.5s;
  line-height: 19px;
  text-align: left;
  ${getStyle('type', textStyle)};
  ${getStyle('transform', textTransform)};
  &:first-letter {
    text-transform: uppercase;
  }
  & i {
    font-style: italic;
    color: #3a6d99;
    margin-right: 5px;
  }
`
