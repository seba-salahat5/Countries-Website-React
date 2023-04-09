import React, { useContext } from 'react'
import HeaderComponent from '../Components/HeaderComponent';
import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HomeContainer from './HomeContainer';
import DetailsContainer from './DetailsContainer';
import { DarkModeContext } from '../DarkMode/DarkModeContext';
import { ThemeProvider} from '@mui/material/styles';
import {THEME} from '../App';

export default function PageWraper() {
  const Context = useContext(DarkModeContext);
  const color = Context.darkMode ? THEME.palette.primary.dark : THEME.palette.primary.light;
  document.documentElement.style.setProperty('--bodyColor', color);

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={THEME}>
        <HeaderComponent />
        <Routes>
          <Route path="/home" element={<HomeContainer />} />
          <Route path="details" element={<DetailsContainer />} />
        </Routes>
      </ThemeProvider>
    </DndProvider>
  );
}
