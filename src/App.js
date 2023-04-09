import * as React from 'react'
import { DarkModeProvider } from './DarkMode/DarkModeContext';
import { createTheme} from '@mui/material/styles';
import PageWraper from './pages/PageWraper'

export const THEME = createTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#111517',
      dark: '#202c37',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ffffff',
      main: '#111517',
      dark: '#2b3945',
      contrastText: '#ffffff',
    },
  },
  typography: {
    "fontFamily": `'Nunito Sans', sans-serif`,
    "fontSize": 14,
    h1: {
      "fontSize": '1.5rem',
      "fontWeight": '800',
    },

    h2: {
      "fontSize": '2rem',
      "fontWeight": '800',
    },

    h3: {
      "fontSize": '0.7rem',
      "fontWeight": '400',
    },

    h4: {
      "fontSize": '0.7rem',
      "fontWeight": '600',
    },

    h5: {
      "fontSize": '0.9rem',
      "fontWeight": '800',
    },

    button: {
      "fontSize": '0.7rem',
      "fontWeight": '800'
    }
  }
});
function App() {
  return (
  <DarkModeProvider>
    <PageWraper/>
  </DarkModeProvider>
  );
}

export default App;
