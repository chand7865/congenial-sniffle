import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Box } from '@mui/material';
import Home from './Components/Home/Home';
import Services from './Components/Services/services';

function App() {
  const [mode, setMode] = useState('light');
  const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: mode === 'dark' ? '#181a20' : '#ffffff',
        paper: mode === 'dark' ? '#23272f' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#f7f7f7' : '#1a1a1a',
        secondary: mode === 'dark' ? '#bdbdbd' : '#4a4a4a',
      },
    },
    typography: {
      fontFamily: [
        'Poppins',
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // 'Arial',
        // 'sans-serif',
      ].join(','),
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.5px',
        color: '#1a1a1a',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.3,
        color: '#1a1a1a',
        marginBottom: '1.5rem',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#1a1a1a',
        marginBottom: '1rem',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#1a1a1a',
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#1a1a1a',
      },
      h6: {
        fontSize: '1.1rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#1a1a1a',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#4a4a4a',
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#4a4a4a',
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '8px 24px',
            textTransform: 'none',
            fontWeight: 500,
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header toggleColorMode={toggleColorMode} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;