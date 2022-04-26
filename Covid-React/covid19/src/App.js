import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import globalStyle from './commons/styles/global-style';
import { GlobalStyles } from '../node_modules/@mui/material/index';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline/>
      <GlobalStyles/>
    </StylesProvider>
  );
}

export default App;
