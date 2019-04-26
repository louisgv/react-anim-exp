import React from 'react';

import { ThemeProvider } from 'styled-components'

import { theme, Global } from './_styles'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Global />
      
    </>
  </ThemeProvider>
  );
}
