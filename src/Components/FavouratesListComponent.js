import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';
import FavourateItemComponent from './FavourateItemComponent';
import GermanyFlag from '../assets/de.svg';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
display: 'flex';
padding: 20px;
`;

const StyledBox = styled(Box)`
background-color: 'white';
display: block;
@media (max-width: 889px) {
    display: none;
};
height:100%;
box-shadow: 3px 2px 8px 3px rgba(0,0,0,0.1);
border-radius: 5px;
`;

export default function FavouratesListComponent() {
    return (
        <StyledBox>
            <StyledStack spacing={1} elevation={6} component="form">
                <ThemeProvider theme={THEME}>
                    <Typography variant="h1" color="#111517">
                        Favorates
                    </Typography>
                    <Stack direction={'row'}>
                        <FavourateItemComponent flag={GermanyFlag} name="Germany"></FavourateItemComponent>
                    </Stack>
                </ThemeProvider>
            </StyledStack>
        </StyledBox>
    );
}