import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import React from "react";
import styled from 'styled-components';
import { styled as materialStyle } from '@mui/material/styles';
import { Button, Typography, Toolbar, Box, AppBar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';

const HeadingLine = styled(Box)`
background-color: white;
padding-left: 3.0rem;
padding-right: 3.0rem;
flexGrow: 1;
`;

const StyledToolbar = styled(Toolbar)`
background-color: white;
display: flex;
justify-content: space-between;
`;

const StyledAppBar = materialStyle(AppBar)({
  boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)'
});

function createHeaderComponent() {
  return <HeadingLine>
    <StyledToolbar>
      <ThemeProvider theme={THEME}>
        <Typography variant="h1" align="center" color="#111517">
          Where in the world?
        </Typography>
        <Button color="light" variant="text">
          <NightlightOutlinedIcon></NightlightOutlinedIcon> Dark Mode
        </Button>
      </ThemeProvider>
    </StyledToolbar>
  </HeadingLine>;
}

export default function Header() {
  return (
    <header>
      <StyledAppBar>{createHeaderComponent()}</StyledAppBar>
    </header>
  );
}