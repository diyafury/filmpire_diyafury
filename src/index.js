import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import ToggleColourModeProvider from './utils/ToggleColourMode';
import App from './components/App';
import store from './app/store';
import './index.css';

// const theme = createTheme({});

ReactDom.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
    <ToggleColourModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColourModeProvider>
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById('root'),
);
