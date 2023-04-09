import React, { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkModeContext";
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEME } from '../App';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

export default function ThemeButton({ ToggleMode }) {
  const Context = useContext(DarkModeContext);

  const StyledButton = styled(Button)({
    color: Context.darkMode ? THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
    backgroundColor: Context.darkMode ? THEME.palette.secondary.dark : THEME.palette.secondary.light,
  });


  const HandleChangeMode = () => {
    Context.darkMode ? ToggleMode(false) : ToggleMode(true);
  }

  const ButtonText = Context.darkMode ? 'Light Mode' : 'Dark Mode';
  return (
    <StyledButton variant="text" onClick={HandleChangeMode}>
      <NightlightOutlinedIcon />
      {ButtonText}
    </StyledButton>
  );
}