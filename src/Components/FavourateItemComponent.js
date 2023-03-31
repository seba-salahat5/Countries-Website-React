import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';
import CancelIcon from '@mui/icons-material/Cancel';
import styled from 'styled-components';
import { styled as materialStyle } from '@mui/material/styles';

const StyledStack = styled(Stack)`
padding-top:20px;
padding-bottom: 20px;
width: 100%;
display:flex;
justify-content: space-between;
`;

const StyledBox = styled(Box)`
width: 60px;
height: 25px;
border-radius: 7px;
object-fit: cover;
`;

const StyledIcon = materialStyle(CancelIcon)({
    color: '#b0b0b0',
    height: '20px'
});
export default function FavourateItemComponent(props) {
    return (
        <StyledStack direction={'row'} >
            <Stack direction={'row'} spacing={2}>
                <StyledBox component="img" alt="Germany" src={props.flag} />
                <ThemeProvider theme={THEME}>
                    <Typography variant="h5" color="#111517">
                        {props.name}
                    </Typography>
                </ThemeProvider>
            </Stack>
            <StyledIcon />
        </StyledStack>

    );
}