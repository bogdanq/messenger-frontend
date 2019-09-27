import React from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const RoundSpinnerWrapper = styled.div`
  display: inline-block;
  height: 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:after {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 3px solid #dfc;
    border-color: #850cf1 transparent #ab70df transparent;
    animation: ${animate} 1.2s linear infinite;
    margin: 0 auto;
  }
`

export const RoundSpinner = () => <RoundSpinnerWrapper />
