import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';
import FavourateCard from './HorizontalCardComponent';
export default function FavouratesListComponent() {
    return (
        <Box sx={{ bgcolor: '#FFFFFF', display: { xs: 'none', md: 'block' } }}>
            <Stack spacing={1} elevation={6} component="form" sx={{ display: 'flex', width: '15vw', py: '30px', px:'30px' }}>
                <ThemeProvider theme={THEME}>
                    <Typography variant="h1" color="#111517">
                        Favorates
                    </Typography>
                    <Stack direction={'row'}>
                        <FavourateCard></FavourateCard>
                    </Stack>
                </ThemeProvider>
            </Stack>
        </Box>
    );
}