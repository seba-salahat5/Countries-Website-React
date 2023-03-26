import * as React from 'react';
import { Box, Stack, InputBase, IconButton, Paper, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RegionsDropDown from '../Components/DropdownComponent';
import CardsContainer from '../Components/CardsGridComponent';
import FavouratesListComponent from '../Components/SideBarComponent';
import styled from 'styled-components';
import { styled as materialStyle } from '@mui/material/styles';

const StyledMainLine = styled(Stack)`
display:flex;
justify-content: space-between;
height:50px;
@media (max-width: 900px) {
  height:150px;
}
`;

const StyledStack = styled(Stack)`
margin-top: 50px;
padding-left: 0rem;
padding-right: 0rem;  
@media (max-width: 599px) {
    padding-left: 3rem;
    padding-right: 3rem; 
};
`;

const StyledBox = styled(Box)`
height: 100%;
padding-left: 4.5rem;
padding-right: 4.5rem;
margin-top: 130px;
`;

const StyledPaper = materialStyle(Paper)({
    display: 'flex',
    width: '30vw',
    minWidth: 400,
    boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)'
});

export default function HomeContainer() {
    return (
        <React.Fragment>
            <StyledBox alignItems="center">
                <StyledMainLine direction={{ sm: 'column', md: 'row' }} spacing={'50px'}>
                    <StyledPaper component="form">
                        <IconButton type="button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase placeholder="Search for a country..." />
                    </StyledPaper>
                    <RegionsDropDown></RegionsDropDown>
                </StyledMainLine>
                <StyledStack direction={'row'}>
                    <Grid container spacing={{ md: 6, xl: 8 }}>
                        <Grid item md={3}>
                            <FavouratesListComponent></FavouratesListComponent>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <CardsContainer></CardsContainer>
                        </Grid>
                    </Grid>
                </StyledStack>
            </StyledBox>
        </React.Fragment>
    );
}