import React, { useContext } from "react";
import { Typography, Toolbar, Box, AppBar } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { THEME } from '../pages/PageWraper';
import ThemeButton from '../Components/ThemeButton';
import { DarkModeContext } from "../DarkMode/DarkModeContext";

export default function HeaderComponent() {
  const Context = useContext(DarkModeContext);

  const HeadingLine = styled(Box)({
    color: Context.darkMode ? THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
    backgroundColor: Context.darkMode ? THEME.palette.secondary.dark : THEME.palette.secondary.light,
    paddingLeft: '3.0rem',
    paddingRight: '3.0rem',
    flexGrow: '1',
  });

  const StyledToolbar = styled(Toolbar)({
    color: Context.darkMode ? THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
    backgroundColor: Context.darkMode ? THEME.palette.secondary.dark : THEME.palette.secondary.light,
    display: 'flex',
    justifyContent: 'space-between',
  });

  const StyledAppBar = styled(AppBar)({
    boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)'
  });

  return (
    <header >
      <StyledAppBar>
        <HeadingLine>
          <StyledToolbar>
            <ThemeProvider theme={THEME}>
              <Typography variant="h1" align="center">
                Where in the world?
              </Typography>
              <ThemeButton ToggleMode={
                (darkMode) => {
                  Context.ToggleMode(darkMode);
                }
              } />
            </ThemeProvider>
          </StyledToolbar>
        </HeadingLine>
      </StyledAppBar>
    </header>
  );
}