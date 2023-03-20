import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import React from "react";
import styled from 'styled-components';
import { Button, Typography, AppBar, Toolbar} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';

const HeadingLine = styled(Toolbar)`
background-color: white;
padding-left: 4.0rem;
padding-right: 4.0rem;
padding-top: 0.25rem;
padding-bottom: 0.25rem;
display:flex;
justify-content: space-between;
`;
function createHeaderComponent() {
  return <HeadingLine>
    <ThemeProvider theme={THEME}>
      <Typography variant="h1" align="center" color="#111517">
        Where in the world?
      </Typography>
      <Button color="light" variant="text">
        <NightlightOutlinedIcon></NightlightOutlinedIcon> Dark Mode
      </Button>
    </ThemeProvider>
  </HeadingLine>;
}

export default function Header() {
  return (
    <header>
      <AppBar>{createHeaderComponent()}</AppBar>
    </header>
  );
}