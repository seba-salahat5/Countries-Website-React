import * as React from 'react';
import { Box, Stack, InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RegionsDropDown from '../Components/DropdownComponent';
import CardsContainer from '../Components/CardsGridComponent';
import FavouratesListComponent from '../Components/SideBarComponent';
import styled from 'styled-components';
const StyledStack = styled(Stack)`
height:50px;
@media (max-width: 900px) {
  height:150px;
}
`;
export default function HomeContainer() {
    return (
        <React.Fragment>
            <Box sx={{ height: '100%', px: '4.0rem', mt: '130px' }}>
                <StyledStack direction={{ sm: 'column', md: 'row' }} spacing={'50px'}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Paper elevation={6} component="form" sx={{ display: 'flex', width: '400px' }}>
                        <IconButton type="button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for a country..." />
                    </Paper>
                    <RegionsDropDown></RegionsDropDown>
                </StyledStack>
                <Stack direction={'row'} spacing={6} sx={{ mt: '50px' }}>
                    <FavouratesListComponent></FavouratesListComponent>
                    <CardsContainer></CardsContainer>
                </Stack>

            </Box>
        </React.Fragment>
    );
}