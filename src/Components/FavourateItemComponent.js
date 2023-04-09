import * as React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { THEME } from '../pages/PageWraper';
import CancelIcon from '@mui/icons-material/Cancel';

export default function FavourateItemComponent({ country, removeFromFavourites, favourates }) {
    const StyledStack = styled(Stack)({
        paddingTop: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    });
    
    const StyledBox = styled(Box)({
        width: '5vw',
        height: '25px',
        borderRadius: '7px',
        objectFit: 'cover',
    });
    
    const StyledIcon = styled(CancelIcon)({
        color: '#b0b0b0',
        height: '20px'
    });
    const handleClick = (event) => {
        removeFromFavourites(favourates.filter(favCountry => favCountry.cca2 !== country.cca2));
    };

    return (
        <StyledStack direction={'row'} >
            <Stack direction={'row'} spacing={2}>
                <StyledBox component="img" alt="Germany" src={country.flags.svg} />
                <ThemeProvider theme={THEME}>
                    <Typography variant="h5">
                        {country.name.common}
                    </Typography>
                </ThemeProvider>
            </Stack>
            <IconButton onClick={handleClick}>
                <StyledIcon />
            </IconButton>
        </StyledStack>

    );
}