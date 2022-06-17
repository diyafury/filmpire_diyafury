import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColourModeContext = createContext();

const ToggleColourMode = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleColourMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  const colourMode = useMemo(() => ({ mode, setMode, toggleColourMode }), []);

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
};

export default ToggleColourMode;
