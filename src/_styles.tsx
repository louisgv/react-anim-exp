import { createGlobalStyle } from 'styled-components'

export const theme = {
  primaryColor: '#bc7eb6',
  primaryVariantColor: '#481346',
  secondaryColor: '#90298d',
  secondaryVariantColor: '#231f20',
  background: '#fff',
  hoverBackground: 'rgba(1,1,1,0.2)',
  disabledText: '#aaa',
  error: '#b00020',
  backgroundOpacity: 0.33,
  backgroundZIndex: 1000,
  titleFont: 'Righteous',
  subtitleFont: 'Roboto',
  titleHeight: window.innerWidth > 700 ? 80 : 57
}

export const Global = createGlobalStyle`
  /* righteous-regular - latin */
  @font-face {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/righteous-v6-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Righteous'), local('Righteous-Regular'),
        url('/fonts/righteous-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/righteous-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/righteous-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/righteous-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/righteous-v6-latin-regular.svg#Righteous') format('svg'); /* Legacy iOS */
  }

  /* roboto-100 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('/fonts/roboto-v18-latin-100.eot'); /* IE9 Compat Modes */
    src: local('Roboto Thin'), local('Roboto-Thin'),
        url('/fonts/roboto-v18-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/roboto-v18-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/roboto-v18-latin-100.woff') format('woff'), /* Modern Browsers */
        url('/fonts/roboto-v18-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/roboto-v18-latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/roboto-v18-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Roboto Light'), local('Roboto-Light'),
        url('/fonts/roboto-v18-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/roboto-v18-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/roboto-v18-latin-300.woff') format('woff'), /* Modern Browsers */
        url('/fonts/roboto-v18-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/roboto-v18-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v18-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
        url('/fonts/roboto-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/roboto-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/roboto-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/roboto-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/roboto-v18-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }

  html,
  body,
  #root {
    background: ${theme.background};
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.subtitleFont};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: ${theme.primaryColor};
    text-decoration: none;
  }

  a:visited {
    color: ${theme.primaryVariantColor};
  }

  a:hover,
  a:visited:hover {
    color: ${theme.secondaryColor};
  }

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.primaryColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.secondaryColor};
  }
`
