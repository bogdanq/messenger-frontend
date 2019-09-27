import { createGlobalStyle, css } from 'styled-components'
import styled from 'styled-components'

const globalStylesCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a,
  a:active,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
    color: #9042d6;
  }
  a:focus {
    outline: 0 none;
  }
  h1 {
    display: block;
    font-size: 2em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 400;
    text-align: center;
    padding: 25px 0;
  }
  :root {
    --text-color: #212121;
    --text-color-light: #b4b4b4;
    --text-color-primary: red;
    --input-font-size: 15px;
    --input-line-height: 24px;
    --input-height: 40px;
    --input-border-color: hsla(0, 0%, 55%, 0.9);
    --input-border-color-primary: red;
    --input-border-color-secondary: #b4b4b4;
    --border-size: 1px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #000 !important;
  }
`
export const GlobalStyles = createGlobalStyle`${globalStylesCss};`

export const Hidden = styled.div`
  display: none;
`
