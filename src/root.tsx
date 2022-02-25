import { createGlobalStyle } from 'styled-components/macro'
import { App } from './app'
const Root = () => (
  <>
    <GlobalStyle />
    <App />
  </>
)
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%;
  height: 100%;
}
body {
  font-family: 'DM Sans', sans-serif;
  height: 100%;
}
[data-js="app"]{
  width: 100%;
  height: 100%;
}
`
export { Root }