import React from 'react'
import Header from './Components/HeaderComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import HomeContainer from './pages/HomePage';
import DetailsContainer from './pages/DetailesPage';

export const THEME = createTheme({
  palette: {
    light: {
      main: '#111517',
    },
  },
  typography: {
   "fontFamily": `'Nunito Sans', sans-serif`,
   "fontSize": 14,
   h1:{
    "fontSize": '1.5rem',
    "fontWeight":'800',
   },

   h2:{
    "fontSize": '2rem',
    "fontWeight":'800',
   },
   
   h5:{
    "fontSize": '0.85rem',
    "fontWeight":'800',
   },

   h4:{
    "fontSize": '0.7rem',
    "fontWeight":'600',
   },
   h3:{
    "fontSize": '0.7rem',
    "fontWeight":'400',
   },

   button:{
    "fontSize": '0.7rem',
    "fontWeight": '800'
   }
  }
});
function App() {
  return (
    <ThemeProvider theme={THEME}>
      <React.Fragment>
        <Header/>
        <Routes>
          <Route path="/react" element={<HomeContainer />} />
          <Route path="details" element={<DetailsContainer />} />
        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
