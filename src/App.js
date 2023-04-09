import * as React from 'react';
import { DarkModeProvider } from './DarkMode/DarkModeContext';
import PageWraper from './pages/PageWraper';


function App() {
  return (
  <DarkModeProvider>
    <PageWraper/>
  </DarkModeProvider>
  );
}

export default App;
