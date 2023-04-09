import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, IconButton, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DarkModeContext } from '../DarkMode/DarkModeContext';
import { THEME } from '../pages/PageWraper';

let debounceDelay;
export default function SearchInputComponent({ searchValue, onSearchEvent }) {
    const Context = useContext(DarkModeContext);
    const StyledPaper = styled(Paper)({
        display: 'flex',
        width: '30vw',
        minWidth: 400,
        boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)',
        color: Context.darkMode ?THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
        backgroundColor: Context.darkMode ?THEME.palette.secondary.dark : THEME.palette.secondary.light,
    });

    const StyledInputBase = styled(InputBase)({
        color: Context.darkMode ?THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
    });

    const StyledIconButton = styled(IconButton)({
        color: Context.darkMode ?THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
    });

    const handleSearch = async (event) => {
        clearTimeout(debounceDelay);
        debounceDelay = setTimeout(() => {
            onSearchEvent(event.target.value);
        }, 500);
    };
    return (
        <StyledPaper component="form">
            <StyledIconButton type="button" aria-label="search">
                <SearchIcon />
            </StyledIconButton>
            <StyledInputBase fullWidth onChange={handleSearch} placeholder="Search for a country..." />
        </StyledPaper>
    );
}