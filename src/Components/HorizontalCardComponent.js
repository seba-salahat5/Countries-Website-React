import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import GermanyFlag from '../assets/de.svg';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';
import CancelIcon from '@mui/icons-material/Cancel';
export default function FavourateItemComponent() {
    return (
        <Stack direction={'row'} spacing={2} sx={{ py: '30px', alignItems: 'center' }}>
            <Box component="img" sx={{ width: '70px', height: '35px', borderRadius: '8px', objectFit: 'cover' }}
                alt="Germany"
                src={GermanyFlag} />
            <Stack direction={'row'} spacing={8}>
                <ThemeProvider theme={THEME}>
                    <Typography variant="h5" color="#111517">
                        Germany
                    </Typography>
                </ThemeProvider>
                <CancelIcon sx={{ color: '#b0b0b0' }} />
            </Stack>
        </Stack>
    );
}