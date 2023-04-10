import React, { useContext } from 'react';
import { OutlinedInput, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DarkModeContext } from '../DarkMode/DarkModeContext';
import { THEME } from '../App';


export default function DropdownComponent({ onFilter }) {
    const [selectedRegion, setSelectedRegion] = React.useState('');
    const Context = useContext(DarkModeContext);

    const StyledSelect = styled(Select)({
        width: '220px',
        height: '50px',
        fontWeight: 600,
        boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)',
        borderRadius: '6px',
        color: Context.darkMode ? THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
        backgroundColor: Context.darkMode ? THEME.palette.secondary.dark : THEME.palette.secondary.light,
    });

    const StyledMenuItem = styled(MenuItem)({
        color: Context.darkMode ? THEME.palette.secondary.contrastText : THEME.palette.secondary.main,
        backgroundColor: Context.darkMode ? THEME.palette.secondary.dark : THEME.palette.secondary.light,
        marginBottom: '0px',
        ":hover": {
            backgroundColor: Context.darkMode ? '#4c6173' : '#fafafa',
        },
    });
    const regions =
        [
            "No Filter",
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania",
            "Favourites"
        ];

    const handleChange = (event) => {
        setSelectedRegion(event.target.value);
        onFilter(event.target.value);
    };
    return (
        <StyledSelect
            displayEmpty
            value={selectedRegion}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (selected.length === 0) {
                    return "Filter By:";
                }
                return selected;
            }}
            MenuProps={{
                PaperProps: {
                    sx: {
                        backgroundColor: Context.darkMode ? THEME.palette.secondary.dark : THEME.palette.secondary.light,
                        '& .MuiMenuItem-root': {
                            padding: '8px',
                        },
                    },
                },
            }}
        >
            <StyledMenuItem disabled value=""><em>Filter By:</em></StyledMenuItem>
            {regions.map((region) => (
                <StyledMenuItem key={region} value={region}>
                    {region}
                </StyledMenuItem>
            ))}
        </StyledSelect>
    );
}