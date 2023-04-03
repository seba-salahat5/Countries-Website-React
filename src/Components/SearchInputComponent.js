import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, IconButton, Paper } from '@mui/material';
import { styled as materialStyle } from '@mui/material/styles';

const StyledPaper = materialStyle(Paper)({
    display: 'flex',
    width: '30vw',
    minWidth: 400,
    boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)'
});

let debounceDelay;
export default function SearchInputComponent({ onSearchEvent }) {
    const handleSearch = async (event) => {
        clearTimeout(debounceDelay);
        debounceDelay = setTimeout(() => {
            onSearchEvent(event.target.value);
        }, 500);
    };
    return (
        <StyledPaper component="form">
            <IconButton type="button" aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase fullWidth onChange={handleSearch} placeholder="Search for a country..." />
        </StyledPaper>
    );
}