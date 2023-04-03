import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';
import FavourateItemComponent from './FavourateItemComponent';
import styled from 'styled-components';

import { ItemTypes } from '../Constants';
import { useDrop } from 'react-dnd';

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

export default function FavouratesListComponent({ favourites, onFavourateChange }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: ItemTypes.CARD,
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        drop: monitor => {
            if (!favourites.some((favCountry) => favCountry.cca2 === monitor.draggedCountry.cca2)) {
                onFavourateChange([...favourites, monitor.draggedCountry]);
            }

        }
    })

    const border = isOver ? "1px solid #27ae60" : "0px solid";
    return (
        <StyledBox ref={dropRef} sx={{ border: border }}>
            <StyledStack spacing={1} elevation={6} component="form" direction={'column'}>
                <ThemeProvider theme={THEME}>
                    <Typography variant="h1" color="#111517">
                        Favorates
                    </Typography>
                    {favourites.map
                        (
                            favCountry =>
                                <Stack direction={'row'} key={favCountry.cca2}>
                                    <FavourateItemComponent country={favCountry} removeFromFavourites={onFavourateChange} favourates={favourites} />
                                </Stack>
                        )}
                </ThemeProvider>
            </StyledStack>
        </StyledBox>
    );
}