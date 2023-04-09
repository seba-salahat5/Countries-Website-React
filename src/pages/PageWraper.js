import React, { useContext } from 'react'
import HeaderComponent from '../Components/HeaderComponent';
import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HomeContainer from './HomeContainer';
import DetailsContainer from './DetailsContainer';
import { DarkModeContext } from '../DarkMode/DarkModeContext';
import { createTheme, ThemeProvider} from '@mui/material/styles';

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

export default function PageWraper() {
  const Context = useContext(DarkModeContext);
  const color = Context.darkMode ? THEME.palette.primary.dark : THEME.palette.primary.light;
  document.documentElement.style.setProperty('--bodyColor', color);

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={THEME}>
        <HeaderComponent />
        <Routes>
          <Route path="/react" element={<HomeContainer />} />
          <Route path="details" element={<DetailsContainer />} />
        </Routes>
      </ThemeProvider>
    </DndProvider>
  );
}
